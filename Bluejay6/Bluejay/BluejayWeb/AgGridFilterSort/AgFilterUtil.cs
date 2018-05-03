using System;
using System.Collections.Generic;
using System.Linq.Dynamic.Core;
using System.Linq;

namespace BluejayWeb.AgGridFilterSort
{
    public static class AgFilterUtil
    {
        /// <summary>
        /// Given an IQueryable, such as a table from an EntityFramework context, and 
        /// an POCO similar to ag-grid's javascript filter model and sort model,
        /// apply the filters and sorts and start-row and end-row to the IQueryable
        /// using dynamic Linq.  Return the modifying IQueryable.  Note that it hasn't
        /// been executed yet.
        /// 
        /// See documentation at http://ag-grid.com for more info.  We are doing server-side
        /// filter/sort.
        /// </summary>
        public static FilterSortResponse<T> ApplyFilterSort<T>(IQueryable<T> queryable, FilterSortModel filterSortModel, string defaultSortField = null, string defaultSortOrder = null)
        {
            IQueryable<T> result = queryable;
            int totalCount = -1;

            // Apply default sort if relevant
            if ((filterSortModel == null) && !string.IsNullOrWhiteSpace(defaultSortField))
            {
                filterSortModel = new FilterSortModel { SortModel = SortItem.NewSortItemList(defaultSortField, defaultSortOrder) };
            }

            if (filterSortModel != null)
            {
                // Apply WHERE clause filters
                if ((filterSortModel.FilterModel != null) && (filterSortModel.FilterModel.Count > 0))
                {
                    foreach (KeyValuePair<String, FilterItem> kvp in filterSortModel.FilterModel)
                    {
                        result = AddWhereClauseChunk<T>(result, kvp.Key, kvp.Value);
                    }
                }

                // Figure out total count
                totalCount = queryable.Count();

                // Apply ORDER BY clauses
                if (((filterSortModel.SortModel == null) || (filterSortModel.SortModel.Count == 0)) && !String.IsNullOrWhiteSpace(defaultSortField))
                {
                    // Apply default sort if relevant
                    filterSortModel.SortModel = SortItem.NewSortItemList(defaultSortField, defaultSortOrder);
                }
                if ((filterSortModel.SortModel != null) && (filterSortModel.SortModel.Count > 0))
                {
                    foreach (SortItem sortItem in filterSortModel.SortModel)
                    {
                        result = AddOrderByChunk<T>(result, sortItem);
                    }
                }

                // Apply start/end rows
                if(filterSortModel.EndRow > 0)
                {
                    int rowCount = filterSortModel.EndRow - filterSortModel.StartRow + 1;
                    result = result.Skip(filterSortModel.StartRow).Take(rowCount);
                }
            }
            return new FilterSortResponse<T> { rows = result.ToList(), totalCount = totalCount };
        }

        /// <summary>
        /// Add one piece of a where clause from angular supplied grid filter object to IQueryable
        /// </summary>
        public static IQueryable<T> AddWhereClauseChunk<T>(IQueryable<T> item, string colId, FilterItem filterItem)
        {
            if (item != null)
            {
                // What data type is the column?
                if (AgFilterConst.FILTER_TYPE_TEXT.Equals(filterItem.FilterType))
                {
                    // Filter on text field

                    // don't bother unless there's some value to filter on
                    if (!String.IsNullOrWhiteSpace(filterItem.Filter))
                    {
                        // Simplify text to filter on
                        string filterOn = filterItem.Filter.Trim().ToUpper();

                        // We're filtering on text
                        if (AgFilterConst.TYPE_CONTAINS.Equals(filterItem.Type))
                        {
                            // Contains text
                            item = item.Where(colId + ".Contains(@0)", filterOn);
                        }
                        else if (AgFilterConst.TYPE_NOT_CONTAINS.Equals(filterItem.Type))
                        {
                            // not contains text
                            item = item.Where("!" + colId + ".Contains(@0)", filterOn);
                        }
                        else if (AgFilterConst.TYPE_STARTS_WITH.Equals(filterItem.Type))
                        {
                            // starts with text
                            item = item.Where(colId + ".StartsWith(@0)", filterOn);
                        }
                        else if (AgFilterConst.TYPE_ENDS_WITH.Equals(filterItem.Type))
                        {
                            // ends with text
                            item = item.Where(colId + ".EndsWith(@0)", filterOn);
                        }
                        else if (AgFilterConst.TYPE_EQUALS.Equals(filterItem.Type))
                        {
                            // equals text
                            item = item.Where(colId + ".ToUpper().Equals(@0)", filterOn);
                        }
                        else if (AgFilterConst.TYPE_NOT_EQUAL.Equals(filterItem.Type))
                        {
                            // not equals text
                            item = item.Where("!" + colId + ".ToUpper().Equals(@0)", filterItem.Filter);
                        }
                    }
                }
                else if (AgFilterConst.FILTER_TYPE_NUMBER.Equals(filterItem.FilterType))
                {
                    // Filter on number

                    // Only proceed if we have a number to filter on
                    Double tmp;
                    if (double.TryParse(filterItem.Filter, out tmp))
                    {
                        // We're filtering on a number
                        if (AgFilterConst.TYPE_EQUALS.Equals(filterItem.Type))
                        {
                            // equals number
                            item = item.Where(colId + " == @0", filterItem.Filter);
                        }
                        else if (AgFilterConst.TYPE_NOT_EQUAL.Equals(filterItem.Type))
                        {
                            // not equals number
                            item = item.Where(colId + " != @0", filterItem.Filter);
                        }
                        else if (AgFilterConst.TYPE_LESS_THAN.Equals(filterItem.Type))
                        {
                            // less than number
                            item = item.Where(colId + " < @0", filterItem.Filter);
                        }
                        else if (AgFilterConst.TYPE_LESS_THAN_OR_EQUAL.Equals(filterItem.Type))
                        {
                            // less than or equal number
                            item = item.Where(colId + " <= @0", filterItem.Filter);
                        }
                        else if (AgFilterConst.TYPE_GREATER_THAN.Equals(filterItem.Type))
                        {
                            // greater than number
                            item = item.Where(colId + " > @0", filterItem.Filter);
                        }
                        else if (AgFilterConst.TYPE_GREATER_THAN_OR_EQUAL.Equals(filterItem.Type))
                        {
                            // greater than or equal number
                            item = item.Where(colId + " >= @0", filterItem.Filter);
                        }
                        else if (AgFilterConst.TYPE_IN_RANGE.Equals(filterItem.Type))
                        {
                            // number in range

                            // Only proceed if we have a number to filter on for the other
                            // end of range
                            Double tmp2;
                            if (double.TryParse(filterItem.FilterTo, out tmp2))
                            {
                                item = item.Where("(" + colId + " >= @0) and (" + colId + " <= @1)", filterItem.Filter, filterItem.FilterTo);
                            }
                        }
                    }
                }
                else if (AgFilterConst.FILTER_TYPE_DATE.Equals(filterItem.FilterType))
                {
                    // Filter on date

                    // Only proceed if we have a number to filter on
                    DateTime date1;
                    if (DateTime.TryParse(filterItem.DateFrom, out date1))
                    {
                        // We're filtering on a number
                        if (AgFilterConst.TYPE_EQUALS.Equals(filterItem.Type))
                        {
                            // equals number
                            item = item.Where(colId + ".Equals(@0)", date1);
                        }
                        else if (AgFilterConst.TYPE_NOT_EQUAL.Equals(filterItem.Type))
                        {
                            // not equals number
                            item = item.Where("!" + colId + ".Equals(@0)", date1);
                        }
                        else if (AgFilterConst.TYPE_LESS_THAN.Equals(filterItem.Type))
                        {
                            // less than number
                            item = item.Where(colId + " < @0", date1);
                        }
                        else if (AgFilterConst.TYPE_LESS_THAN_OR_EQUAL.Equals(filterItem.Type))
                        {
                            // less than or equal number
                            item = item.Where(colId + " <= @0", date1);
                        }
                        else if (AgFilterConst.TYPE_GREATER_THAN.Equals(filterItem.Type))
                        {
                            // greater than number
                            item = item.Where(colId + " > @0", date1);
                        }
                        else if (AgFilterConst.TYPE_GREATER_THAN_OR_EQUAL.Equals(filterItem.Type))
                        {
                            // greater than or equal number
                            item = item.Where(colId + " >= @0", date1);
                        }
                        else if (AgFilterConst.TYPE_IN_RANGE.Equals(filterItem.Type))
                        {
                            // number in range

                            // Only proceed if we have a number to filter on for the other
                            // end of range
                            Double date2;
                            if (double.TryParse(filterItem.DateTo, out date2))
                            {
                                item = item.Where("(" + colId + " >= @0) and (" + colId + " <= @1)", date1, date2);
                            }
                        }
                    }
                }
            }
            return item;
        }

        public static IQueryable<T> AddOrderByChunk<T>(IQueryable<T> item, SortItem sortItem)
        {
            // Skip generated field "lineNumber" because you can't sort on that
            if ((item != null) && (sortItem != null) && !sortItem.ColId.ToUpper().Equals("LINENUMBER"))
            {
                // Sort order is "ASC" unless we explicitly match "DESC".
                // Remember NOT to trust input data at all
                string sortDirection = "ASC";
                if(!String.IsNullOrWhiteSpace(sortItem.Sort))
                {
                    if("DESC".Equals(sortItem.Sort.Trim().ToUpper()))
                    {
                        sortDirection = "DESC";
                    }
                }
                item = item.OrderBy(sortItem.ColId + " " + sortDirection);
            }
            return item;
        }
    }
}

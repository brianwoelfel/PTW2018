using System.Collections.Generic;

namespace BluejayWeb.AgGridFilterSort
{
    /// <summary>
    /// Simple POCO to match an item in ag-grid's SortModel.  These
    /// are usually bundled together into an array
    /// </summary>
    public class SortItem
    {
        /// <summary>
        /// Name of column to sort on
        /// </summary>
        public string ColId { get; set; }
        /// <summary>
        /// Sort order "ASC" (default) or "DESC"
        /// </summary>
        public string Sort { get; set; }

        public SortItem(string colId, string sort)
        {
            ColId = colId;
            Sort = sort;
        }

        /// <summary>
        /// Constructor, but return a singleton list of SortItem
        /// instead of just a SortItem.
        /// </summary>
        public static List<SortItem> NewSortItemList(string colId, string sort)
        {
            return new List<SortItem> { new SortItem(colId, sort) };
        }
    }
}

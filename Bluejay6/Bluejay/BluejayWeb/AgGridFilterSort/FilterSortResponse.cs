using System.Collections.Generic;

namespace BluejayWeb.AgGridFilterSort
{
    /// <summary>
    /// Response containing array of data and total row count
    /// as a result of doing a filter/sort query
    /// </summary>
    /// <typeparam name="T"></typeparam>
    public class FilterSortResponse<T>
    {
        public List<T> rows;
        public int totalCount;
    }
}

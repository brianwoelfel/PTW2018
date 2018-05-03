using System.Collections.Generic;

namespace BluejayWeb.AgGridFilterSort
{
    /// <summary>
    /// POCO representation of angular ag-grid TypeScript request
    /// to sort/filter a grid.
    /// </summary>
    public class FilterSortModel
    {
        /// <summary>
        /// Dictionary where the key is a field name,
        /// and the value is a FilterModel describing how to filter on that field.
        /// </summary>
        public IDictionary<string, FilterItem> FilterModel { get; set; }
        /// <summary>
        /// Column orderings described by SortModel
        /// </summary>
        public IList<SortItem> SortModel { get; set; }
        /// <summary>
        /// Index of first row that we're requesting from server (to support pagination)
        /// </summary>
        public int StartRow { get; set; }
        /// <summary>
        /// Index of last row that we're requesting from server (to support pagination)
        /// </summary>
        public int EndRow { get; set; }
    }
}

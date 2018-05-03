namespace BluejayWeb.AgGridFilterSort
{
    /// <summary>
    /// Simple POCO to match an item in ag-grid's FilterModel. 
    /// </summary>
    public class FilterItem
    {
        /// <summary>
        /// Text value to use as a filter
        /// </summary>
        public string Filter { get; set; }

        /// <summary>
        /// In the case of FilterType=inRange, the other range value to go with Filter
        /// </summary>
        public string FilterTo { get; set; }

        /// <summary>
        /// Data type of filter, either "text", "number", or "date"
        /// </summary>
        public string FilterType { get; set; }

        /// <summary>
        /// Type of filter. 
        /// "contains" - field contains filter text as substring, 
        /// "notContains" - field does not contain filter text as substring, 
        /// "equals" - field equals filter text, 
        /// "notEqual" - field does not equal filter test, 
        /// "startsWith" - field starts with filter text, 
        /// "endsWith" - field ends with filter text, 
        /// "lessThan" - field is less than filter text, 
        /// "lessThanOrEqual" - field is less than or equal to filter text, 
        /// "greaterThan" - field is greater than filter text, 
        /// "greaterThanOrEqual" - field is greater than or equal, 
        /// "inRange" - field is between "filter" and "filterTo"
        /// </summary>
        public string Type { get; set; }
        
        /// <summary>
        ///  Starting date for date ranger filter
        /// </summary>
        public string DateTo { get; set; }
        
        /// <summary>
        ///  Ending date for date ranger filter
        /// </summary>
        public string DateFrom { get; set; }
    }
}

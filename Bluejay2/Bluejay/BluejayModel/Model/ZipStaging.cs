using System;
using System.Collections.Generic;

namespace BluejayModel.Model
{
    public partial class ZipStaging
    {
        public int RecordNumber { get; set; }
        public string Zipcode { get; set; }
        public string ZipCodeType { get; set; }
        public string City { get; set; }
        public string State { get; set; }
        public string LocationType { get; set; }
        public decimal? Lat { get; set; }
        public decimal? Long { get; set; }
        public string Xaxis { get; set; }
        public string Yaxis { get; set; }
        public string Zaxis { get; set; }
        public string WorldRegion { get; set; }
        public string Country { get; set; }
        public string LocationText { get; set; }
        public string Location { get; set; }
        public string Decommisioned { get; set; }
        public long? TaxReturnsFiled { get; set; }
        public long? EstimatedPopulation { get; set; }
        public long? TotalWages { get; set; }
        public string Notes { get; set; }
    }
}

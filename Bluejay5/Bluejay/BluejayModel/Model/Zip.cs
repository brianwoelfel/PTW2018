using System;
using System.Collections.Generic;

namespace BluejayModel.Model
{
    public partial class Zip
    {
        public int Id { get; set; }
        public string Zipcode { get; set; }
        public string City { get; set; }
        public string State { get; set; }
    }
}

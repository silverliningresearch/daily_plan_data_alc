let interview_data_arr_raw = `[
    {
        "InterviewId": "1905",
        "InterviewEndDate": "2023-02-14",
        "InterviewState": "Complete",
        "Flight": "KL - KLM",
        "Dest": "AMS",
        "AirlineCode": "KL",
        "download_time": "28-12-2023 07:46:48"
    },
    {
        "InterviewId": "2077",
        "InterviewEndDate": "2023-04-03",
        "InterviewState": "Complete",
        "Flight": "KL - KLM",
        "Dest": "AMS",
        "AirlineCode": "KL"
    },
    {
        "InterviewId": "2099",
        "InterviewEndDate": "2023-02-01",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "BRU",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "2100",
        "InterviewEndDate": "2023-02-01",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "BRU",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "2101",
        "InterviewEndDate": "2023-02-01",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "BRU",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "2102",
        "InterviewEndDate": "2023-02-01",
        "InterviewState": "Complete",
        "Flight": "KL - KLM",
        "Dest": "AMS",
        "AirlineCode": "KL"
    },
    {
        "InterviewId": "2103",
        "InterviewEndDate": "2023-02-01",
        "InterviewState": "Complete",
        "Flight": "KL - KLM",
        "Dest": "AMS",
        "AirlineCode": "KL"
    },
    {
        "InterviewId": "2104",
        "InterviewEndDate": "2023-02-01",
        "InterviewState": "Complete",
        "Flight": "KL - KLM",
        "Dest": "AMS",
        "AirlineCode": "KL"
    },
    {
        "InterviewId": "2105",
        "InterviewEndDate": "2023-02-01",
        "InterviewState": "Complete",
        "Flight": "KL - KLM",
        "Dest": "AMS",
        "AirlineCode": "KL"
    },
    {
        "InterviewId": "2106",
        "InterviewEndDate": "2023-02-01",
        "InterviewState": "Complete",
        "Flight": "KL - KLM",
        "Dest": "AMS",
        "AirlineCode": "KL"
    },
    {
        "InterviewId": "2107",
        "InterviewEndDate": "2023-02-01",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "FRA",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "2108",
        "InterviewEndDate": "2023-02-01",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "FRA",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "2110",
        "InterviewEndDate": "2023-02-01",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "FRA",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "2111",
        "InterviewEndDate": "2023-02-01",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "FRA",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "2112",
        "InterviewEndDate": "2023-02-01",
        "InterviewState": "Complete",
        "Flight": "BA - British Airways",
        "Dest": "LCY",
        "AirlineCode": "BA"
    },
    {
        "InterviewId": "2113",
        "InterviewEndDate": "2023-02-01",
        "InterviewState": "Complete",
        "Flight": "BA - British Airways",
        "Dest": "LCY",
        "AirlineCode": "BA"
    },
    {
        "InterviewId": "2119",
        "InterviewEndDate": "2023-02-02",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "FRA",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "2120",
        "InterviewEndDate": "2023-02-02",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "FRA",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "2121",
        "InterviewEndDate": "2023-02-02",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "FRA",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "2122",
        "InterviewEndDate": "2023-02-02",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "FRA",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "2123",
        "InterviewEndDate": "2023-02-02",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "FRA",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "2124",
        "InterviewEndDate": "2023-02-02",
        "InterviewState": "Complete",
        "Flight": "LO - LOT",
        "Dest": "KRK",
        "AirlineCode": "LO"
    },
    {
        "InterviewId": "2126",
        "InterviewEndDate": "2023-02-06",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "FRA",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "2127",
        "InterviewEndDate": "2023-02-06",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "FRA",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "2129",
        "InterviewEndDate": "2023-02-06",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "FRA",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "2130",
        "InterviewEndDate": "2023-02-06",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "FRA",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "2131",
        "InterviewEndDate": "2023-02-06",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "FRA",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "2132",
        "InterviewEndDate": "2023-02-06",
        "InterviewState": "Complete",
        "Flight": "AF - AIR FRANCE",
        "Dest": "CDG",
        "AirlineCode": "AF"
    },
    {
        "InterviewId": "2133",
        "InterviewEndDate": "2023-02-06",
        "InterviewState": "Complete",
        "Flight": "AF - AIR FRANCE",
        "Dest": "CDG",
        "AirlineCode": "AF"
    },
    {
        "InterviewId": "2134",
        "InterviewEndDate": "2023-02-06",
        "InterviewState": "Complete",
        "Flight": "AF - AIR FRANCE",
        "Dest": "CDG",
        "AirlineCode": "AF"
    },
    {
        "InterviewId": "2135",
        "InterviewEndDate": "2023-02-06",
        "InterviewState": "Complete",
        "Flight": "AF - AIR FRANCE",
        "Dest": "CDG",
        "AirlineCode": "AF"
    },
    {
        "InterviewId": "2138",
        "InterviewEndDate": "2023-02-06",
        "InterviewState": "Complete",
        "Flight": "AF - AIR FRANCE",
        "Dest": "CDG",
        "AirlineCode": "AF"
    },
    {
        "InterviewId": "2139",
        "InterviewEndDate": "2023-02-06",
        "InterviewState": "Complete",
        "Flight": "SK - Scandinavian Airlines System (SAS)",
        "Dest": "ARN",
        "AirlineCode": "SK"
    },
    {
        "InterviewId": "2140",
        "InterviewEndDate": "2023-02-09",
        "InterviewState": "Complete",
        "Flight": "SK - Scandinavian Airlines System (SAS)",
        "Dest": "ARN",
        "AirlineCode": "SK"
    },
    {
        "InterviewId": "2141",
        "InterviewEndDate": "2023-02-06",
        "InterviewState": "Complete",
        "Flight": "SK - Scandinavian Airlines System (SAS)",
        "Dest": "ARN",
        "AirlineCode": "SK"
    },
    {
        "InterviewId": "2142",
        "InterviewEndDate": "2023-02-06",
        "InterviewState": "Complete",
        "Flight": "SK - Scandinavian Airlines System (SAS)",
        "Dest": "ARN",
        "AirlineCode": "SK"
    },
    {
        "InterviewId": "2143",
        "InterviewEndDate": "2023-02-06",
        "InterviewState": "Complete",
        "Flight": "SK - Scandinavian Airlines System (SAS)",
        "Dest": "ARN",
        "AirlineCode": "SK"
    },
    {
        "InterviewId": "2144",
        "InterviewEndDate": "2023-02-06",
        "InterviewState": "Complete",
        "Flight": "SK - Scandinavian Airlines System (SAS)Q",
        "Dest": "ARN",
        "AirlineCode": "SK"
    },
    {
        "InterviewId": "2145",
        "InterviewEndDate": "2023-02-06",
        "InterviewState": "Complete",
        "Flight": "SK - Scandinavian Airlines System (SAS)",
        "Dest": "ARN",
        "AirlineCode": "SK"
    },
    {
        "InterviewId": "2146",
        "InterviewEndDate": "2023-02-06",
        "InterviewState": "Complete",
        "Flight": "SK - Scandinavian Airlines System (SAS)",
        "Dest": "ARN",
        "AirlineCode": "SK"
    },
    {
        "InterviewId": "2147",
        "InterviewEndDate": "2023-02-06",
        "InterviewState": "Complete",
        "Flight": "SK - Scandinavian Airlines System (SAS)",
        "Dest": "ARN",
        "AirlineCode": "SK"
    },
    {
        "InterviewId": "2148",
        "InterviewEndDate": "2023-02-06",
        "InterviewState": "Complete",
        "Flight": "SK - Scandinavian Airlines System (SAS)",
        "Dest": "ARN",
        "AirlineCode": "SK"
    },
    {
        "InterviewId": "2149",
        "InterviewEndDate": "2023-02-07",
        "InterviewState": "Complete",
        "Flight": "AF - AIR FRANCE",
        "Dest": "CDG",
        "AirlineCode": "AF"
    },
    {
        "InterviewId": "2150",
        "InterviewEndDate": "2023-02-07",
        "InterviewState": "Complete",
        "Flight": "AF - AIR FRANCE",
        "Dest": "CDG",
        "AirlineCode": "AF"
    },
    {
        "InterviewId": "2151",
        "InterviewEndDate": "2023-02-07",
        "InterviewState": "Complete",
        "Flight": "AF - AIR FRANCE",
        "Dest": "CDG",
        "AirlineCode": "AF"
    },
    {
        "InterviewId": "2152",
        "InterviewEndDate": "2023-02-07",
        "InterviewState": "Complete",
        "Flight": "AF - AIR FRANCE",
        "Dest": "CDG",
        "AirlineCode": "AF"
    },
    {
        "InterviewId": "2153",
        "InterviewEndDate": "2023-02-07",
        "InterviewState": "Complete",
        "Flight": "AF - AIR FRANCE",
        "Dest": "CDG",
        "AirlineCode": "AF"
    },
    {
        "InterviewId": "2154",
        "InterviewEndDate": "2023-02-07",
        "InterviewState": "Complete",
        "Flight": "SK - Scandinavian Airlines System (SAS)",
        "Dest": "ARN",
        "AirlineCode": "SK"
    },
    {
        "InterviewId": "2155",
        "InterviewEndDate": "2023-02-07",
        "InterviewState": "Complete",
        "Flight": "SK - Scandinavian Airlines System (SAS)",
        "Dest": "ARN",
        "AirlineCode": "SK"
    },
    {
        "InterviewId": "2156",
        "InterviewEndDate": "2023-02-07",
        "InterviewState": "Complete",
        "Flight": "SK - Scandinavian Airlines System (SAS)",
        "Dest": "ARN",
        "AirlineCode": "SK"
    },
    {
        "InterviewId": "2158",
        "InterviewEndDate": "2023-02-07",
        "InterviewState": "Complete",
        "Flight": "SK - Scandinavian Airlines System (SAS)",
        "Dest": "ARN",
        "AirlineCode": "SK"
    },
    {
        "InterviewId": "2160",
        "InterviewEndDate": "2023-02-07",
        "InterviewState": "Complete",
        "Flight": "SK - Scandinavian Airlines System (SAS)",
        "Dest": "ARN",
        "AirlineCode": "SK"
    },
    {
        "InterviewId": "2162",
        "InterviewEndDate": "2023-02-07",
        "InterviewState": "Complete",
        "Flight": "SK - Scandinavian Airlines System (SAS)",
        "Dest": "OSL",
        "AirlineCode": "SK"
    },
    {
        "InterviewId": "2163",
        "InterviewEndDate": "2023-02-07",
        "InterviewState": "Complete",
        "Flight": "SK - Scandinavian Airlines System (SAS)",
        "Dest": "OSL",
        "AirlineCode": "SK"
    },
    {
        "InterviewId": "2164",
        "InterviewEndDate": "2023-02-07",
        "InterviewState": "Complete",
        "Flight": "SK - Scandinavian Airlines System (SAS)",
        "Dest": "OSL",
        "AirlineCode": "SK"
    },
    {
        "InterviewId": "2165",
        "InterviewEndDate": "2023-02-07",
        "InterviewState": "Complete",
        "Flight": "SK - Scandinavian Airlines System (SAS)",
        "Dest": "OSL",
        "AirlineCode": "SK"
    },
    {
        "InterviewId": "2166",
        "InterviewEndDate": "2023-02-07",
        "InterviewState": "Complete",
        "Flight": "Sas",
        "Dest": "OSL",
        "AirlineCode": "Sas"
    },
    {
        "InterviewId": "2167",
        "InterviewEndDate": "2023-02-09",
        "InterviewState": "Complete",
        "Flight": "KL - KLM",
        "Dest": "AMS",
        "AirlineCode": "KL"
    },
    {
        "InterviewId": "2169",
        "InterviewEndDate": "2023-02-09",
        "InterviewState": "Complete",
        "Flight": "KL - KLM",
        "Dest": "AMS",
        "AirlineCode": "KL"
    },
    {
        "InterviewId": "2170",
        "InterviewEndDate": "2023-02-09",
        "InterviewState": "Complete",
        "Flight": "KL - KLM",
        "Dest": "AMS",
        "AirlineCode": "KL"
    },
    {
        "InterviewId": "2171",
        "InterviewEndDate": "2023-02-09",
        "InterviewState": "Complete",
        "Flight": "KL - KLM",
        "Dest": "AMS",
        "AirlineCode": "KL"
    },
    {
        "InterviewId": "2172",
        "InterviewEndDate": "2023-02-09",
        "InterviewState": "Complete",
        "Flight": "KL - KLM",
        "Dest": "AMS",
        "AirlineCode": "KL"
    },
    {
        "InterviewId": "2181",
        "InterviewEndDate": "2023-02-09",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "FRA",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "2183",
        "InterviewEndDate": "2023-02-09",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "FRA",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "2185",
        "InterviewEndDate": "2023-02-09",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "FRA",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "2186",
        "InterviewEndDate": "2023-02-09",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "FRA",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "2187",
        "InterviewEndDate": "2023-02-09",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "FRA",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "2189",
        "InterviewEndDate": "2023-02-13",
        "InterviewState": "Complete",
        "Flight": "FHY - Freebird Airline",
        "Dest": "KRK",
        "AirlineCode": "FHY"
    },
    {
        "InterviewId": "2190",
        "InterviewEndDate": "2023-02-13",
        "InterviewState": "Complete",
        "Flight": "FHY - Freebird Airline",
        "Dest": "KRK",
        "AirlineCode": "FHY"
    },
    {
        "InterviewId": "2191",
        "InterviewEndDate": "2023-02-13",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "VIE",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "2192",
        "InterviewEndDate": "2023-02-13",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "VIE",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "2193",
        "InterviewEndDate": "2023-02-13",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "VIE",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "2194",
        "InterviewEndDate": "2023-02-13",
        "InterviewState": "Complete",
        "Flight": "W6 - Wizz Air",
        "Dest": "OTP",
        "AirlineCode": "W6"
    },
    {
        "InterviewId": "2195",
        "InterviewEndDate": "2023-02-13",
        "InterviewState": "Complete",
        "Flight": "W6 - Wizz Air",
        "Dest": "OTP",
        "AirlineCode": "W6"
    },
    {
        "InterviewId": "2196",
        "InterviewEndDate": "2023-02-13",
        "InterviewState": "Complete",
        "Flight": "W6 - Wizz Air",
        "Dest": "OTP",
        "AirlineCode": "W6"
    },
    {
        "InterviewId": "2197",
        "InterviewEndDate": "2023-02-13",
        "InterviewState": "Complete",
        "Flight": "SK - Scandinavian Airlines System (SAS)",
        "Dest": "ARN",
        "AirlineCode": "SK"
    },
    {
        "InterviewId": "2198",
        "InterviewEndDate": "2023-02-13",
        "InterviewState": "Complete",
        "Flight": "SK - Scandinavian Airlines System (SAS)",
        "Dest": "ARN",
        "AirlineCode": "SK"
    },
    {
        "InterviewId": "2199",
        "InterviewEndDate": "2023-02-13",
        "InterviewState": "Complete",
        "Flight": "SK - Scandinavian Airlines System (SAS)",
        "Dest": "ARN",
        "AirlineCode": "SK"
    },
    {
        "InterviewId": "2200",
        "InterviewEndDate": "2023-02-14",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "ALC",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "2201",
        "InterviewEndDate": "2023-02-14",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "ALC",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "2202",
        "InterviewEndDate": "2023-02-14",
        "InterviewState": "Complete",
        "Flight": "AF - AIR FRANCE",
        "Dest": "ALC",
        "AirlineCode": "AF"
    },
    {
        "InterviewId": "2204",
        "InterviewEndDate": "2023-02-14",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "POZ",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "2206",
        "InterviewEndDate": "2023-02-14",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "POZ",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "2208",
        "InterviewEndDate": "2023-02-14",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "POZ",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "2213",
        "InterviewEndDate": "2023-02-14",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "MUC",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "2215",
        "InterviewEndDate": "2023-02-14",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "MUC",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "2217",
        "InterviewEndDate": "2023-02-14",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "MUC",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "2219",
        "InterviewEndDate": "2023-02-14",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "MUC",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "2220",
        "InterviewEndDate": "2023-02-14",
        "InterviewState": "Complete",
        "Flight": "KL - KLM",
        "Dest": "AMS",
        "AirlineCode": "KL"
    },
    {
        "InterviewId": "2222",
        "InterviewEndDate": "2023-02-14",
        "InterviewState": "Complete",
        "Flight": "KL - KLM",
        "Dest": "AMS",
        "AirlineCode": "KL"
    },
    {
        "InterviewId": "2224",
        "InterviewEndDate": "2023-02-14",
        "InterviewState": "Complete",
        "Flight": "KL - KLM",
        "Dest": "AMS",
        "AirlineCode": "KL"
    },
    {
        "InterviewId": "2226",
        "InterviewEndDate": "2023-02-14",
        "InterviewState": "Complete",
        "Flight": "KL - KLM",
        "Dest": "AMS",
        "AirlineCode": "KL"
    },
    {
        "InterviewId": "2229",
        "InterviewEndDate": "2023-02-14",
        "InterviewState": "Complete",
        "Flight": "KL - KLM",
        "Dest": "AMS",
        "AirlineCode": "KL"
    },
    {
        "InterviewId": "2230",
        "InterviewEndDate": "2023-02-14",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "CDG",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "2232",
        "InterviewEndDate": "2023-02-14",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "FRA",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "2235",
        "InterviewEndDate": "2023-02-14",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "FRA",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "2240",
        "InterviewEndDate": "2023-02-14",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "FRA",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "2242",
        "InterviewEndDate": "2023-02-15",
        "InterviewState": "Complete",
        "Flight": "KL - KLM",
        "Dest": "AMS",
        "AirlineCode": "KL"
    },
    {
        "InterviewId": "2243",
        "InterviewEndDate": "2023-02-15",
        "InterviewState": "Complete",
        "Flight": "KL - KLM",
        "Dest": "AMS",
        "AirlineCode": "KL"
    },
    {
        "InterviewId": "2246",
        "InterviewEndDate": "2023-02-15",
        "InterviewState": "Complete",
        "Flight": "KL - KLM",
        "Dest": "AMS",
        "AirlineCode": "KL"
    },
    {
        "InterviewId": "2248",
        "InterviewEndDate": "2023-02-15",
        "InterviewState": "Complete",
        "Flight": "KL - KLM",
        "Dest": "AMS",
        "AirlineCode": "KL"
    },
    {
        "InterviewId": "2249",
        "InterviewEndDate": "2023-02-15",
        "InterviewState": "Complete",
        "Flight": "KL - KLM",
        "Dest": "AMS",
        "AirlineCode": "KL"
    },
    {
        "InterviewId": "2253",
        "InterviewEndDate": "2023-02-15",
        "InterviewState": "Complete",
        "Flight": "BT - Air Baltic",
        "Dest": "RIX",
        "AirlineCode": "BT"
    },
    {
        "InterviewId": "2255",
        "InterviewEndDate": "2023-02-15",
        "InterviewState": "Complete",
        "Flight": "BT - Air Baltic",
        "Dest": "RIX",
        "AirlineCode": "BT"
    },
    {
        "InterviewId": "2257",
        "InterviewEndDate": "2023-02-15",
        "InterviewState": "Complete",
        "Flight": "BT - Air Baltic",
        "Dest": "RIX",
        "AirlineCode": "BT"
    },
    {
        "InterviewId": "2259",
        "InterviewEndDate": "2023-02-15",
        "InterviewState": "Complete",
        "Flight": "BT - Air Baltic",
        "Dest": "RIX",
        "AirlineCode": "BT"
    },
    {
        "InterviewId": "2261",
        "InterviewEndDate": "2023-02-15",
        "InterviewState": "Complete",
        "Flight": "BT - Air Baltic,",
        "Dest": "RIX",
        "AirlineCode": "BT"
    },
    {
        "InterviewId": "2262",
        "InterviewEndDate": "2023-02-16",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "ALC",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "2264",
        "InterviewEndDate": "2023-02-16",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "ALC",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "2269",
        "InterviewEndDate": "2023-02-16",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "ALC",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "2271",
        "InterviewEndDate": "2023-02-16",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "ALC",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "2273",
        "InterviewEndDate": "2023-02-16",
        "InterviewState": "Complete",
        "Flight": "SK - Scandinavian Airlines System (SAS)",
        "Dest": "OSL",
        "AirlineCode": "SK"
    },
    {
        "InterviewId": "2275",
        "InterviewEndDate": "2023-02-16",
        "InterviewState": "Complete",
        "Flight": "SK - Scandinavian Airlines System (SAS)",
        "Dest": "OSL",
        "AirlineCode": "SK"
    },
    {
        "InterviewId": "2277",
        "InterviewEndDate": "2023-02-16",
        "InterviewState": "Complete",
        "Flight": "SK - Scandinavian Airlines System (SAS)",
        "Dest": "OSL",
        "AirlineCode": "SK"
    },
    {
        "InterviewId": "2279",
        "InterviewEndDate": "2023-02-16",
        "InterviewState": "Complete",
        "Flight": "SK - Scandinavian Airlines System (SAS)",
        "Dest": "OSL",
        "AirlineCode": "SK"
    },
    {
        "InterviewId": "2281",
        "InterviewEndDate": "2023-02-16",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "ALC",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "2282",
        "InterviewEndDate": "2023-02-16",
        "InterviewState": "Complete",
        "Flight": "SK - Scandinavian Airlines System (SAS)",
        "Dest": "OSL",
        "AirlineCode": "SK"
    },
    {
        "InterviewId": "2284",
        "InterviewEndDate": "2023-02-16",
        "InterviewState": "Complete",
        "Flight": "JTD - Jettime",
        "Dest": "SPC",
        "AirlineCode": "JTD"
    },
    {
        "InterviewId": "2285",
        "InterviewEndDate": "2023-02-16",
        "InterviewState": "Complete",
        "Flight": "JTD - Jettime",
        "Dest": "SPC",
        "AirlineCode": "JTD"
    },
    {
        "InterviewId": "2286",
        "InterviewEndDate": "2023-02-16",
        "InterviewState": "Complete",
        "Flight": "JTD - Jettime",
        "Dest": "SPC",
        "AirlineCode": "JTD"
    },
    {
        "InterviewId": "2287",
        "InterviewEndDate": "2023-02-16",
        "InterviewState": "Complete",
        "Flight": "JTD - Jettime",
        "Dest": "SPC",
        "AirlineCode": "JTD"
    },
    {
        "InterviewId": "2288",
        "InterviewEndDate": "2023-02-16",
        "InterviewState": "Complete",
        "Flight": "JTD - Jettime",
        "Dest": "SPC",
        "AirlineCode": "JTD"
    },
    {
        "InterviewId": "2289",
        "InterviewEndDate": "2023-02-16",
        "InterviewState": "Complete",
        "Flight": "SUS - Sunclass Airlines (SUN-AIR)",
        "Dest": "NUE",
        "AirlineCode": "SUS"
    },
    {
        "InterviewId": "2292",
        "InterviewEndDate": "2023-02-16",
        "InterviewState": "Complete",
        "Flight": "SUS - Sunclass Airlines (SUN-AIR)",
        "Dest": "NUE",
        "AirlineCode": "SUS"
    },
    {
        "InterviewId": "2294",
        "InterviewEndDate": "2023-02-16",
        "InterviewState": "Complete",
        "Flight": "Sus",
        "Dest": "NUE",
        "AirlineCode": "Sus"
    },
    {
        "InterviewId": "2297",
        "InterviewEndDate": "2023-02-16",
        "InterviewState": "Complete",
        "Flight": "SUS - Sunclass Airlines (SUN-AIR)",
        "Dest": "NUE",
        "AirlineCode": "SUS"
    },
    {
        "InterviewId": "2299",
        "InterviewEndDate": "2023-02-16",
        "InterviewState": "Complete",
        "Flight": "SUS - Sunclass Airlines (SUN-AIR)",
        "Dest": "NUE",
        "AirlineCode": "SUS"
    },
    {
        "InterviewId": "2311",
        "InterviewEndDate": "2023-02-17",
        "InterviewState": "Complete",
        "Flight": "KL - KLM",
        "Dest": "AMS",
        "AirlineCode": "KL"
    },
    {
        "InterviewId": "2312",
        "InterviewEndDate": "2023-02-17",
        "InterviewState": "Complete",
        "Flight": "KL - KLM",
        "Dest": "AMS",
        "AirlineCode": "KL"
    },
    {
        "InterviewId": "2313",
        "InterviewEndDate": "2023-02-17",
        "InterviewState": "Complete",
        "Flight": "KL - KLM",
        "Dest": "AMS",
        "AirlineCode": "KL"
    },
    {
        "InterviewId": "2314",
        "InterviewEndDate": "2023-02-17",
        "InterviewState": "Complete",
        "Flight": "KL - KLM",
        "Dest": "AMS",
        "AirlineCode": "KL"
    },
    {
        "InterviewId": "2315",
        "InterviewEndDate": "2023-02-17",
        "InterviewState": "Complete",
        "Flight": "KL - KLM",
        "Dest": "AMS",
        "AirlineCode": "KL"
    },
    {
        "InterviewId": "2316",
        "InterviewEndDate": "2023-02-17",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "GDN",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "2318",
        "InterviewEndDate": "2023-02-17",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "GDN",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "2321",
        "InterviewEndDate": "2023-02-17",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "GDN",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "2322",
        "InterviewEndDate": "2023-02-17",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "GDN",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "2324",
        "InterviewEndDate": "2023-02-17",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "GDN",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "2326",
        "InterviewEndDate": "2023-02-17",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "STN",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "2331",
        "InterviewEndDate": "2023-02-17",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "STN",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "2333",
        "InterviewEndDate": "2023-02-17",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "STN",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "2338",
        "InterviewEndDate": "2023-02-28",
        "InterviewState": "Complete",
        "Flight": "SK - Scandinavian Airlines System (SAS)",
        "Dest": "OSL",
        "AirlineCode": "SK"
    },
    {
        "InterviewId": "2339",
        "InterviewEndDate": "2023-02-28",
        "InterviewState": "Complete",
        "Flight": "SK - Scandinavian Airlines System (SAS)",
        "Dest": "OSL",
        "AirlineCode": "SK"
    },
    {
        "InterviewId": "2342",
        "InterviewEndDate": "2023-02-28",
        "InterviewState": "Complete",
        "Flight": "SK - Scandinavian Airlines System (SAS)",
        "Dest": "OSL",
        "AirlineCode": "SK"
    },
    {
        "InterviewId": "2344",
        "InterviewEndDate": "2023-02-28",
        "InterviewState": "Complete",
        "Flight": "SK - Scandinavian Airlines System (SAS)",
        "Dest": "OSL",
        "AirlineCode": "SK"
    },
    {
        "InterviewId": "2345",
        "InterviewEndDate": "2023-02-28",
        "InterviewState": "Complete",
        "Flight": "SK - Scandinavian Airlines System (SAS)",
        "Dest": "OSL",
        "AirlineCode": "SK"
    },
    {
        "InterviewId": "2349",
        "InterviewEndDate": "2023-02-28",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "OPO",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "2354",
        "InterviewEndDate": "2023-02-28",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "OPO",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "2362",
        "InterviewEndDate": "2023-02-28",
        "InterviewState": "Complete",
        "Flight": "DY - Norwegian Air Schuttle",
        "Dest": "OSL",
        "AirlineCode": "DY"
    },
    {
        "InterviewId": "2363",
        "InterviewEndDate": "2023-02-28",
        "InterviewState": "Complete",
        "Flight": "DY - Norwegian Air Schuttle",
        "Dest": "OSL",
        "AirlineCode": "DY"
    },
    {
        "InterviewId": "2364",
        "InterviewEndDate": "2023-02-28",
        "InterviewState": "Complete",
        "Flight": "DY - Norwegian Air Schuttle",
        "Dest": "OSL",
        "AirlineCode": "DY"
    },
    {
        "InterviewId": "2368",
        "InterviewEndDate": "2023-03-07",
        "InterviewState": "Complete",
        "Flight": "AF - AIR FRANCE",
        "Dest": "CDG",
        "AirlineCode": "AF"
    },
    {
        "InterviewId": "2372",
        "InterviewEndDate": "2023-03-07",
        "InterviewState": "Complete",
        "Flight": "AF - AIR FRANCE",
        "Dest": "CDG",
        "AirlineCode": "AF"
    },
    {
        "InterviewId": "2373",
        "InterviewEndDate": "2023-03-07",
        "InterviewState": "Complete",
        "Flight": "AF - AIR FRANCE",
        "Dest": "CDG",
        "AirlineCode": "AF"
    },
    {
        "InterviewId": "2375",
        "InterviewEndDate": "2023-03-07",
        "InterviewState": "Complete",
        "Flight": "AF - AIR FRANCE",
        "Dest": "CDG",
        "AirlineCode": "AF"
    },
    {
        "InterviewId": "2377",
        "InterviewEndDate": "2023-03-07",
        "InterviewState": "Complete",
        "Flight": "Af",
        "Dest": "CDG",
        "AirlineCode": "Af"
    },
    {
        "InterviewId": "2379",
        "InterviewEndDate": "2023-03-07",
        "InterviewState": "Complete",
        "Flight": "SK - Scandinavian Airlines System (SAS)",
        "Dest": "ARN",
        "AirlineCode": "SK"
    },
    {
        "InterviewId": "2380",
        "InterviewEndDate": "2023-03-07",
        "InterviewState": "Complete",
        "Flight": "SK - Scandinavian Airlines System (SAS)",
        "Dest": "ARN",
        "AirlineCode": "SK"
    },
    {
        "InterviewId": "2388",
        "InterviewEndDate": "2023-03-07",
        "InterviewState": "Complete",
        "Flight": "SK - Scandinavian Airlines System (SAS)",
        "Dest": "ARN",
        "AirlineCode": "SK"
    },
    {
        "InterviewId": "2390",
        "InterviewEndDate": "2023-03-07",
        "InterviewState": "Complete",
        "Flight": "SK - Scandinavian Airlines System (SAS)",
        "Dest": "OSL",
        "AirlineCode": "SK"
    },
    {
        "InterviewId": "2391",
        "InterviewEndDate": "2023-03-07",
        "InterviewState": "Complete",
        "Flight": "SK - Scandinavian Airlines System (SAS)",
        "Dest": "OSL",
        "AirlineCode": "SK"
    },
    {
        "InterviewId": "2398",
        "InterviewEndDate": "2023-03-07",
        "InterviewState": "Complete",
        "Flight": "SK - Scandinavian Airlines System (SAS)",
        "Dest": "OSL",
        "AirlineCode": "SK"
    },
    {
        "InterviewId": "2400",
        "InterviewEndDate": "2023-03-08",
        "InterviewState": "Complete",
        "Flight": "KL - KLM",
        "Dest": "AMS",
        "AirlineCode": "KL"
    },
    {
        "InterviewId": "2402",
        "InterviewEndDate": "2023-03-08",
        "InterviewState": "Complete",
        "Flight": "KL - KLM",
        "Dest": "AMS",
        "AirlineCode": "KL"
    },
    {
        "InterviewId": "2405",
        "InterviewEndDate": "2023-03-08",
        "InterviewState": "Complete",
        "Flight": "KL - KLM",
        "Dest": "AMS",
        "AirlineCode": "KL"
    },
    {
        "InterviewId": "2406",
        "InterviewEndDate": "2023-03-08",
        "InterviewState": "Complete",
        "Flight": "KL - KLM",
        "Dest": "AMS",
        "AirlineCode": "KL"
    },
    {
        "InterviewId": "2408",
        "InterviewEndDate": "2023-03-08",
        "InterviewState": "Complete",
        "Flight": "BA - British Airways",
        "Dest": "LCY",
        "AirlineCode": "BA"
    },
    {
        "InterviewId": "2409",
        "InterviewEndDate": "2023-03-08",
        "InterviewState": "Complete",
        "Flight": "BA - British Airways",
        "Dest": "LCY",
        "AirlineCode": "BA"
    },
    {
        "InterviewId": "2417",
        "InterviewEndDate": "2023-03-08",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "TRN",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "2419",
        "InterviewEndDate": "2023-03-08",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "TRN",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "2420",
        "InterviewEndDate": "2023-03-08",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "TRN",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "2421",
        "InterviewEndDate": "2023-03-08",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "TRN",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "2425",
        "InterviewEndDate": "2023-03-08",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "FRA",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "2428",
        "InterviewEndDate": "2023-03-08",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "FRA",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "2430",
        "InterviewEndDate": "2023-03-08",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "FRA",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "2432",
        "InterviewEndDate": "2023-03-08",
        "InterviewState": "Complete",
        "Flight": "AF - AIR FRANCE",
        "Dest": "CDG",
        "AirlineCode": "AF"
    },
    {
        "InterviewId": "2434",
        "InterviewEndDate": "2023-03-08",
        "InterviewState": "Complete",
        "Flight": "AF - AIR FRANCE",
        "Dest": "CDG",
        "AirlineCode": "AF"
    },
    {
        "InterviewId": "2436",
        "InterviewEndDate": "2023-03-08",
        "InterviewState": "Complete",
        "Flight": "AF - AIR FRANCE",
        "Dest": "CDG",
        "AirlineCode": "AF"
    },
    {
        "InterviewId": "2437",
        "InterviewEndDate": "2023-03-08",
        "InterviewState": "Complete",
        "Flight": "AF - AIR FRANCE",
        "Dest": "CDG",
        "AirlineCode": "AF"
    },
    {
        "InterviewId": "2439",
        "InterviewEndDate": "2023-03-08",
        "InterviewState": "Complete",
        "Flight": "AF - AIR FRANCE",
        "Dest": "CDG",
        "AirlineCode": "AF"
    },
    {
        "InterviewId": "2442",
        "InterviewEndDate": "2023-03-08",
        "InterviewState": "Complete",
        "Flight": "SK - Scandinavian Airlines System (SAS)",
        "Dest": "OSL",
        "AirlineCode": "SK"
    },
    {
        "InterviewId": "2443",
        "InterviewEndDate": "2023-03-08",
        "InterviewState": "Complete",
        "Flight": "SK - Scandinavian Airlines System (SAS)",
        "Dest": "OSL",
        "AirlineCode": "SK"
    },
    {
        "InterviewId": "2444",
        "InterviewEndDate": "2023-03-08",
        "InterviewState": "Complete",
        "Flight": "SK - Scandinavian Airlines System (SAS)",
        "Dest": "OSL",
        "AirlineCode": "SK"
    },
    {
        "InterviewId": "2445",
        "InterviewEndDate": "2023-03-08",
        "InterviewState": "Complete",
        "Flight": "SK - Scandinavian Airlines System (SAS)",
        "Dest": "OSL",
        "AirlineCode": "SK"
    },
    {
        "InterviewId": "2448",
        "InterviewEndDate": "2023-03-09",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "FRA",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "2449",
        "InterviewEndDate": "2023-03-09",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "FRA",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "2452",
        "InterviewEndDate": "2023-03-09",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "FRA",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "2455",
        "InterviewEndDate": "2023-03-09",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "FRA",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "2456",
        "InterviewEndDate": "2023-03-09",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "FRA",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "2459",
        "InterviewEndDate": "2023-03-09",
        "InterviewState": "Complete",
        "Flight": "Fr",
        "Dest": "MAN",
        "AirlineCode": "Fr"
    },
    {
        "InterviewId": "2460",
        "InterviewEndDate": "2023-03-09",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "MAN",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "2468",
        "InterviewEndDate": "2023-03-09",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "STN",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "2471",
        "InterviewEndDate": "2023-03-09",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "STN",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "2474",
        "InterviewEndDate": "2023-03-12",
        "InterviewState": "Complete",
        "Flight": "KL - KLM",
        "Dest": "AMS",
        "AirlineCode": "KL"
    },
    {
        "InterviewId": "2475",
        "InterviewEndDate": "2023-03-12",
        "InterviewState": "Complete",
        "Flight": "KL - KLM",
        "Dest": "AMS",
        "AirlineCode": "KL"
    },
    {
        "InterviewId": "2476",
        "InterviewEndDate": "2023-03-12",
        "InterviewState": "Complete",
        "Flight": "KL - KLM",
        "Dest": "AMS",
        "AirlineCode": "KL"
    },
    {
        "InterviewId": "2477",
        "InterviewEndDate": "2023-03-12",
        "InterviewState": "Complete",
        "Flight": "VY - Vueling Airlines",
        "Dest": "TFS",
        "AirlineCode": "VY"
    },
    {
        "InterviewId": "2478",
        "InterviewEndDate": "2023-03-12",
        "InterviewState": "Complete",
        "Flight": "VY - Vueling Airlines",
        "Dest": "TFS",
        "AirlineCode": "VY"
    },
    {
        "InterviewId": "2479",
        "InterviewEndDate": "2023-03-12",
        "InterviewState": "Complete",
        "Flight": "VY - Vueling Airlines",
        "Dest": "TFS",
        "AirlineCode": "VY"
    },
    {
        "InterviewId": "2480",
        "InterviewEndDate": "2023-03-12",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "SVQ",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "2481",
        "InterviewEndDate": "2023-03-12",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "SVQ",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "2482",
        "InterviewEndDate": "2023-03-12",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "SVQ",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "2483",
        "InterviewEndDate": "2023-03-12",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "STN",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "2484",
        "InterviewEndDate": "2023-03-12",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "STN",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "2485",
        "InterviewEndDate": "2023-03-12",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "STN",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "2487",
        "InterviewEndDate": "2023-03-13",
        "InterviewState": "Complete",
        "Flight": "BT - Air Baltic",
        "Dest": "RIX",
        "AirlineCode": "BT"
    },
    {
        "InterviewId": "2489",
        "InterviewEndDate": "2023-03-13",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "FRA",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "2491",
        "InterviewEndDate": "2023-03-13",
        "InterviewState": "Complete",
        "Flight": "BT - Air Baltic",
        "Dest": "RIX",
        "AirlineCode": "BT"
    },
    {
        "InterviewId": "2493",
        "InterviewEndDate": "2023-03-13",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "FRA",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "2495",
        "InterviewEndDate": "2023-03-13",
        "InterviewState": "Complete",
        "Flight": "BT - Air Baltic",
        "Dest": "RIX",
        "AirlineCode": "BT"
    },
    {
        "InterviewId": "2497",
        "InterviewEndDate": "2023-03-13",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "FRA",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "2501",
        "InterviewEndDate": "2023-03-13",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "FRA",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "2510",
        "InterviewEndDate": "2023-03-14",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "MUC",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "2512",
        "InterviewEndDate": "2023-03-14",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "MUC",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "2515",
        "InterviewEndDate": "2023-03-14",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "MUC",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "2520",
        "InterviewEndDate": "2023-03-14",
        "InterviewState": "Complete",
        "Flight": "KL - KLM",
        "Dest": "AMS",
        "AirlineCode": "KL"
    },
    {
        "InterviewId": "2522",
        "InterviewEndDate": "2023-03-14",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "FRA",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "2524",
        "InterviewEndDate": "2023-03-14",
        "InterviewState": "Complete",
        "Flight": "KL - KLM",
        "Dest": "AMS",
        "AirlineCode": "KL"
    },
    {
        "InterviewId": "2527",
        "InterviewEndDate": "2023-03-14",
        "InterviewState": "Complete",
        "Flight": "KL - KLM",
        "Dest": "AMS",
        "AirlineCode": "KL"
    },
    {
        "InterviewId": "2529",
        "InterviewEndDate": "2023-03-14",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "FRA",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "2532",
        "InterviewEndDate": "2023-03-14",
        "InterviewState": "Complete",
        "Flight": "KL - KLM",
        "Dest": "AMS",
        "AirlineCode": "KL"
    },
    {
        "InterviewId": "2533",
        "InterviewEndDate": "2023-03-14",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "FRA",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "2536",
        "InterviewEndDate": "2023-03-14",
        "InterviewState": "Complete",
        "Flight": "KL - KLM",
        "Dest": "AMS",
        "AirlineCode": "KL"
    },
    {
        "InterviewId": "2540",
        "InterviewEndDate": "2023-03-15",
        "InterviewState": "Complete",
        "Flight": "KL - KLM",
        "Dest": "AMS",
        "AirlineCode": "KL"
    },
    {
        "InterviewId": "2541",
        "InterviewEndDate": "2023-03-15",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "MAD",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "2543",
        "InterviewEndDate": "2023-03-15",
        "InterviewState": "Complete",
        "Flight": "KL - KLM",
        "Dest": "AMS",
        "AirlineCode": "KL"
    },
    {
        "InterviewId": "2548",
        "InterviewEndDate": "2023-03-15",
        "InterviewState": "Complete",
        "Flight": "KL - KLM",
        "Dest": "AMS",
        "AirlineCode": "KL"
    },
    {
        "InterviewId": "2551",
        "InterviewEndDate": "2023-03-15",
        "InterviewState": "Complete",
        "Flight": "KL - KLM",
        "Dest": "AMS",
        "AirlineCode": "KL"
    },
    {
        "InterviewId": "2553",
        "InterviewEndDate": "2023-03-15",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "MAD",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "2556",
        "InterviewEndDate": "2023-03-15",
        "InterviewState": "Complete",
        "Flight": "KL - KLM",
        "Dest": "AMS",
        "AirlineCode": "KL"
    },
    {
        "InterviewId": "2559",
        "InterviewEndDate": "2023-03-15",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "FRA",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "2565",
        "InterviewEndDate": "2023-03-15",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "FRA",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "2566",
        "InterviewEndDate": "2023-03-15",
        "InterviewState": "Complete",
        "Flight": "BA - British Airways",
        "Dest": "LCY",
        "AirlineCode": "BA"
    },
    {
        "InterviewId": "2569",
        "InterviewEndDate": "2023-03-15",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "FRA",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "2572",
        "InterviewEndDate": "2023-03-15",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "FRA",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "2577",
        "InterviewEndDate": "2023-03-15",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "FRA",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "2580",
        "InterviewEndDate": "2023-03-19",
        "InterviewState": "Complete",
        "Flight": "KL - KLM",
        "Dest": "AMS",
        "AirlineCode": "KL"
    },
    {
        "InterviewId": "2581",
        "InterviewEndDate": "2023-03-19",
        "InterviewState": "Complete",
        "Flight": "KL - KLM",
        "Dest": "AMS",
        "AirlineCode": "KL"
    },
    {
        "InterviewId": "2582",
        "InterviewEndDate": "2023-03-19",
        "InterviewState": "Complete",
        "Flight": "KL - KLM",
        "Dest": "AMS",
        "AirlineCode": "KL"
    },
    {
        "InterviewId": "2583",
        "InterviewEndDate": "2023-03-19",
        "InterviewState": "Complete",
        "Flight": "VY - Vueling Airlines",
        "Dest": "TFS",
        "AirlineCode": "VY"
    },
    {
        "InterviewId": "2584",
        "InterviewEndDate": "2023-03-19",
        "InterviewState": "Complete",
        "Flight": "VY - Vueling Airlines",
        "Dest": "TFS",
        "AirlineCode": "VY"
    },
    {
        "InterviewId": "2585",
        "InterviewEndDate": "2023-03-19",
        "InterviewState": "Complete",
        "Flight": "VY - Vueling Airlines",
        "Dest": "TFS",
        "AirlineCode": "VY"
    },
    {
        "InterviewId": "2586",
        "InterviewEndDate": "2023-03-19",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "STN",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "2587",
        "InterviewEndDate": "2023-03-19",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "STN",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "2588",
        "InterviewEndDate": "2023-03-19",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "STN",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "2589",
        "InterviewEndDate": "2023-03-19",
        "InterviewState": "Complete",
        "Flight": "AF - AIR FRANCE",
        "Dest": "CDG",
        "AirlineCode": "AF"
    },
    {
        "InterviewId": "2590",
        "InterviewEndDate": "2023-03-19",
        "InterviewState": "Complete",
        "Flight": "AF - AIR FRANCE",
        "Dest": "CDG",
        "AirlineCode": "AF"
    },
    {
        "InterviewId": "2591",
        "InterviewEndDate": "2023-03-19",
        "InterviewState": "Complete",
        "Flight": "AF - AIR FRANCE",
        "Dest": "CDG",
        "AirlineCode": "AF"
    },
    {
        "InterviewId": "2592",
        "InterviewEndDate": "2023-03-20",
        "InterviewState": "Complete",
        "Flight": "SK - Scandinavian Airlines System (SAS)",
        "Dest": "OSL",
        "AirlineCode": "SK"
    },
    {
        "InterviewId": "2593",
        "InterviewEndDate": "2023-03-20",
        "InterviewState": "Complete",
        "Flight": "SK - Scandinavian Airlines System (SAS)",
        "Dest": "OSL",
        "AirlineCode": "SK"
    },
    {
        "InterviewId": "2595",
        "InterviewEndDate": "2023-03-20",
        "InterviewState": "Complete",
        "Flight": "SK - Scandinavian Airlines System (SAS)",
        "Dest": "OSL",
        "AirlineCode": "SK"
    },
    {
        "InterviewId": "2599",
        "InterviewEndDate": "2023-03-20",
        "InterviewState": "Complete",
        "Flight": "BA - British Airways",
        "Dest": "LHR",
        "AirlineCode": "BA"
    },
    {
        "InterviewId": "2601",
        "InterviewEndDate": "2023-03-20",
        "InterviewState": "Complete",
        "Flight": "W6 - Wizz Air",
        "Dest": "OTP",
        "AirlineCode": "W6"
    },
    {
        "InterviewId": "2602",
        "InterviewEndDate": "2023-03-20",
        "InterviewState": "Complete",
        "Flight": "W6 - Wizz Air",
        "Dest": "OTP",
        "AirlineCode": "W6"
    },
    {
        "InterviewId": "2603",
        "InterviewEndDate": "2023-03-20",
        "InterviewState": "Complete",
        "Flight": "BA - British Airways",
        "Dest": "LHR",
        "AirlineCode": "BA"
    },
    {
        "InterviewId": "2607",
        "InterviewEndDate": "2023-03-20",
        "InterviewState": "Complete",
        "Flight": "W6 - Wizz Air",
        "Dest": "OTP",
        "AirlineCode": "W6"
    },
    {
        "InterviewId": "2610",
        "InterviewEndDate": "2023-03-20",
        "InterviewState": "Complete",
        "Flight": "BA - British Airways",
        "Dest": "LHR",
        "AirlineCode": "BA"
    },
    {
        "InterviewId": "2611",
        "InterviewEndDate": "2023-03-20",
        "InterviewState": "Complete",
        "Flight": "W6 - Wizz Air",
        "Dest": "OTP",
        "AirlineCode": "W6"
    },
    {
        "InterviewId": "2613",
        "InterviewEndDate": "2023-03-20",
        "InterviewState": "Complete",
        "Flight": "SK - Scandinavian Airlines System (SAS)",
        "Dest": "OSL",
        "AirlineCode": "SK"
    },
    {
        "InterviewId": "2615",
        "InterviewEndDate": "2023-03-20",
        "InterviewState": "Complete",
        "Flight": "SK - Scandinavian Airlines System (SAS)",
        "Dest": "OSL",
        "AirlineCode": "SK"
    },
    {
        "InterviewId": "2617",
        "InterviewEndDate": "2023-03-21",
        "InterviewState": "Complete",
        "Flight": "SK - Scandinavian Airlines System (SAS)",
        "Dest": "ARN",
        "AirlineCode": "SK"
    },
    {
        "InterviewId": "2618",
        "InterviewEndDate": "2023-03-20",
        "InterviewState": "Complete",
        "Flight": "SK - Scandinavian Airlines System (SAS)",
        "Dest": "ARN",
        "AirlineCode": "SK"
    },
    {
        "InterviewId": "2620",
        "InterviewEndDate": "2023-03-20",
        "InterviewState": "Complete",
        "Flight": "SK - Scandinavian Airlines System (SAS)",
        "Dest": "ARN",
        "AirlineCode": "SK"
    },
    {
        "InterviewId": "2621",
        "InterviewEndDate": "2023-03-20",
        "InterviewState": "Complete",
        "Flight": "SK - Scandinavian Airlines System (SAS)",
        "Dest": "ARN",
        "AirlineCode": "SK"
    },
    {
        "InterviewId": "2623",
        "InterviewEndDate": "2023-03-20",
        "InterviewState": "Complete",
        "Flight": "SK - Scandinavian Airlines System (SAS)",
        "Dest": "OSL",
        "AirlineCode": "SK"
    },
    {
        "InterviewId": "2625",
        "InterviewEndDate": "2023-03-20",
        "InterviewState": "Complete",
        "Flight": "SK - Scandinavian Airlines System (SAS)",
        "Dest": "ARN",
        "AirlineCode": "SK"
    },
    {
        "InterviewId": "2635",
        "InterviewEndDate": "2023-03-21",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "TSF",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "2640",
        "InterviewEndDate": "2023-03-21",
        "InterviewState": "Complete",
        "Flight": "KL - KLM",
        "Dest": "AMS",
        "AirlineCode": "KL"
    },
    {
        "InterviewId": "2642",
        "InterviewEndDate": "2023-03-21",
        "InterviewState": "Complete",
        "Flight": "KL - KLM",
        "Dest": "AMS",
        "AirlineCode": "KL"
    },
    {
        "InterviewId": "2644",
        "InterviewEndDate": "2023-03-21",
        "InterviewState": "Complete",
        "Flight": "KL - KLM",
        "Dest": "AMS",
        "AirlineCode": "KL"
    },
    {
        "InterviewId": "2646",
        "InterviewEndDate": "2023-03-21",
        "InterviewState": "Complete",
        "Flight": "KL - KLM",
        "Dest": "AMS",
        "AirlineCode": "KL"
    },
    {
        "InterviewId": "2648",
        "InterviewEndDate": "2023-03-21",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "FRA",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "2650",
        "InterviewEndDate": "2023-03-21",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "FRA",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "2652",
        "InterviewEndDate": "2023-03-21",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "FRA",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "2654",
        "InterviewEndDate": "2023-03-21",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "FRA",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "2655",
        "InterviewEndDate": "2023-03-21",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "FRA",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "2664",
        "InterviewEndDate": "2023-03-21",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "DUB",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "2665",
        "InterviewEndDate": "2023-03-21",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "DUB",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "2666",
        "InterviewEndDate": "2023-03-21",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "DUB",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "2667",
        "InterviewEndDate": "2023-03-21",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "DUB",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "2668",
        "InterviewEndDate": "2023-03-27",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "MLA",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "2670",
        "InterviewEndDate": "2023-03-27",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "MLA",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "2672",
        "InterviewEndDate": "2023-03-27",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "MLA",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "2674",
        "InterviewEndDate": "2023-03-27",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "MLA",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "2676",
        "InterviewEndDate": "2023-03-27",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "MLA",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "2679",
        "InterviewEndDate": "2023-03-27",
        "InterviewState": "Complete",
        "Flight": "BT - Air Baltic",
        "Dest": "RIX",
        "AirlineCode": "BT"
    },
    {
        "InterviewId": "2681",
        "InterviewEndDate": "2023-03-27",
        "InterviewState": "Complete",
        "Flight": "BT - Air Baltic",
        "Dest": "RIX",
        "AirlineCode": "BT"
    },
    {
        "InterviewId": "2687",
        "InterviewEndDate": "2023-03-27",
        "InterviewState": "Complete",
        "Flight": "KL - KLM",
        "Dest": "AMS",
        "AirlineCode": "KL"
    },
    {
        "InterviewId": "2689",
        "InterviewEndDate": "2023-03-27",
        "InterviewState": "Complete",
        "Flight": "Kl",
        "Dest": "AMS",
        "AirlineCode": "Kl"
    },
    {
        "InterviewId": "2691",
        "InterviewEndDate": "2023-03-27",
        "InterviewState": "Complete",
        "Flight": "KL - KLM",
        "Dest": "AMS",
        "AirlineCode": "KL"
    },
    {
        "InterviewId": "2692",
        "InterviewEndDate": "2023-03-27",
        "InterviewState": "Complete",
        "Flight": "KL - KLM",
        "Dest": "AMS",
        "AirlineCode": "KL"
    },
    {
        "InterviewId": "2695",
        "InterviewEndDate": "2023-03-27",
        "InterviewState": "Complete",
        "Flight": "KL - KLM",
        "Dest": "AMS",
        "AirlineCode": "KL"
    },
    {
        "InterviewId": "2698",
        "InterviewEndDate": "2023-03-28",
        "InterviewState": "Complete",
        "Flight": "LO - LOT",
        "Dest": "WAW",
        "AirlineCode": "LO"
    },
    {
        "InterviewId": "2706",
        "InterviewEndDate": "2023-03-28",
        "InterviewState": "Complete",
        "Flight": "LO - LOT",
        "Dest": "WAW",
        "AirlineCode": "LO"
    },
    {
        "InterviewId": "2709",
        "InterviewEndDate": "2023-03-28",
        "InterviewState": "Complete",
        "Flight": "LO - LOT",
        "Dest": "WAW",
        "AirlineCode": "LO"
    },
    {
        "InterviewId": "2713",
        "InterviewEndDate": "2023-03-28",
        "InterviewState": "Complete",
        "Flight": "KL - KLM",
        "Dest": "AMS",
        "AirlineCode": "KL"
    },
    {
        "InterviewId": "2714",
        "InterviewEndDate": "2023-03-28",
        "InterviewState": "Complete",
        "Flight": "KL - KLM",
        "Dest": "AMS",
        "AirlineCode": "KL"
    },
    {
        "InterviewId": "2724",
        "InterviewEndDate": "2023-03-28",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "OPO",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "2726",
        "InterviewEndDate": "2023-03-28",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "OPO",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "2728",
        "InterviewEndDate": "2023-03-28",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "OPO",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "2731",
        "InterviewEndDate": "2023-03-28",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "FRA",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "2733",
        "InterviewEndDate": "2023-03-28",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "FRA",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "2735",
        "InterviewEndDate": "2023-03-28",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "FRA",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "2736",
        "InterviewEndDate": "2023-03-28",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "OPO",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "2737",
        "InterviewEndDate": "2023-03-28",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "FRA",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "2740",
        "InterviewEndDate": "2023-04-03",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "MLA",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "2741",
        "InterviewEndDate": "2023-04-03",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "MLA",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "2743",
        "InterviewEndDate": "2023-04-03",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "MLA",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "2746",
        "InterviewEndDate": "2023-04-03",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "MLA",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "2756",
        "InterviewEndDate": "2023-04-03",
        "InterviewState": "Complete",
        "Flight": "KL - KLM",
        "Dest": "AMS",
        "AirlineCode": "KL"
    },
    {
        "InterviewId": "2759",
        "InterviewEndDate": "2023-04-03",
        "InterviewState": "Complete",
        "Flight": "Klm",
        "Dest": "AMS",
        "AirlineCode": "Klm"
    },
    {
        "InterviewId": "2763",
        "InterviewEndDate": "2023-04-03",
        "InterviewState": "Complete",
        "Flight": "KL - KLM",
        "Dest": "AMS",
        "AirlineCode": "KL"
    },
    {
        "InterviewId": "2765",
        "InterviewEndDate": "2023-04-03",
        "InterviewState": "Complete",
        "Flight": "KL - KLM",
        "Dest": "AMS",
        "AirlineCode": "KL"
    },
    {
        "InterviewId": "2787",
        "InterviewEndDate": "2023-04-04",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "FRA",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "2792",
        "InterviewEndDate": "2023-04-04",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "FRA",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "2793",
        "InterviewEndDate": "2023-04-04",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "FRA",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "2794",
        "InterviewEndDate": "2023-04-04",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "FRA",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "2795",
        "InterviewEndDate": "2023-04-04",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "FRA",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "2797",
        "InterviewEndDate": "2023-04-04",
        "InterviewState": "Complete",
        "Flight": "DK - Sunclass Airlines",
        "Dest": "TFS",
        "AirlineCode": "DK"
    },
    {
        "InterviewId": "2798",
        "InterviewEndDate": "2023-04-04",
        "InterviewState": "Complete",
        "Flight": "DK - Sunclass Airlines",
        "Dest": "TFS",
        "AirlineCode": "DK"
    },
    {
        "InterviewId": "2799",
        "InterviewEndDate": "2023-04-04",
        "InterviewState": "Complete",
        "Flight": "DK - Sunclass Airlines",
        "Dest": "TFS",
        "AirlineCode": "DK"
    },
    {
        "InterviewId": "2800",
        "InterviewEndDate": "2023-04-04",
        "InterviewState": "Complete",
        "Flight": "DK - Sunclass Airlines",
        "Dest": "TFS",
        "AirlineCode": "DK"
    },
    {
        "InterviewId": "2801",
        "InterviewEndDate": "2023-04-04",
        "InterviewState": "Complete",
        "Flight": "DK - Sunclass Airlines",
        "Dest": "TFS",
        "AirlineCode": "DK"
    },
    {
        "InterviewId": "2803",
        "InterviewEndDate": "2023-04-05",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "DUB",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "2804",
        "InterviewEndDate": "2023-04-05",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "DUB",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "2808",
        "InterviewEndDate": "2023-04-05",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "DUB",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "2809",
        "InterviewEndDate": "2023-04-05",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "PMI",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "2810",
        "InterviewEndDate": "2023-04-05",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "SPC",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "2811",
        "InterviewEndDate": "2023-04-05",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "PMI",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "2812",
        "InterviewEndDate": "2023-04-05",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "PMI",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "2813",
        "InterviewEndDate": "2023-04-05",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "PMI",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "2814",
        "InterviewEndDate": "2023-04-05",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "PMI",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "2815",
        "InterviewEndDate": "2023-04-05",
        "InterviewState": "Complete",
        "Flight": "KL - KLM",
        "Dest": "AMS",
        "AirlineCode": "KL"
    },
    {
        "InterviewId": "2816",
        "InterviewEndDate": "2023-04-05",
        "InterviewState": "Complete",
        "Flight": "Klm",
        "Dest": "AMS",
        "AirlineCode": "Klm"
    },
    {
        "InterviewId": "2817",
        "InterviewEndDate": "2023-04-05",
        "InterviewState": "Complete",
        "Flight": "KL - KLM",
        "Dest": "AMS",
        "AirlineCode": "KL"
    },
    {
        "InterviewId": "2818",
        "InterviewEndDate": "2023-04-05",
        "InterviewState": "Complete",
        "Flight": "KL - KLM",
        "Dest": "AMS",
        "AirlineCode": "KL"
    },
    {
        "InterviewId": "2819",
        "InterviewEndDate": "2023-04-05",
        "InterviewState": "Complete",
        "Flight": "Klm",
        "Dest": "AMS",
        "AirlineCode": "Klm"
    },
    {
        "InterviewId": "2820",
        "InterviewEndDate": "2023-04-05",
        "InterviewState": "Complete",
        "Flight": "KL - KLM",
        "Dest": "AMS",
        "AirlineCode": "KL"
    },
    {
        "InterviewId": "2823",
        "InterviewEndDate": "2023-04-05",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "ALC",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "2824",
        "InterviewEndDate": "2023-04-05",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "ALC",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "2825",
        "InterviewEndDate": "2023-04-05",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "ALC",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "2829",
        "InterviewEndDate": "2023-04-05",
        "InterviewState": "Complete",
        "Flight": "DY - Norwegian Air Schuttle",
        "Dest": "OSL",
        "AirlineCode": "DY"
    },
    {
        "InterviewId": "2830",
        "InterviewEndDate": "2023-04-05",
        "InterviewState": "Complete",
        "Flight": "DY - Norwegian Air Schuttle",
        "Dest": "OSL",
        "AirlineCode": "DY"
    },
    {
        "InterviewId": "2832",
        "InterviewEndDate": "2023-04-05",
        "InterviewState": "Complete",
        "Flight": "DY - Norwegian Air Schuttle",
        "Dest": "OSL",
        "AirlineCode": "DY"
    },
    {
        "InterviewId": "2835",
        "InterviewEndDate": "2023-04-05",
        "InterviewState": "Complete",
        "Flight": "DY - Norwegian Air Schuttle",
        "Dest": "OSL",
        "AirlineCode": "DY"
    },
    {
        "InterviewId": "2836",
        "InterviewEndDate": "2023-04-05",
        "InterviewState": "Complete",
        "Flight": "DY - Norwegian Air Schuttle",
        "Dest": "OSL",
        "AirlineCode": "DY"
    },
    {
        "InterviewId": "2847",
        "InterviewEndDate": "2023-04-05",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "KRK",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "2852",
        "InterviewEndDate": "2023-04-13",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "BGY",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "2853",
        "InterviewEndDate": "2023-04-13",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "BJV",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "2862",
        "InterviewEndDate": "2023-04-13",
        "InterviewState": "Complete",
        "Flight": "KL - KLM",
        "Dest": "AMS",
        "AirlineCode": "KL"
    },
    {
        "InterviewId": "2863",
        "InterviewEndDate": "2023-04-13",
        "InterviewState": "Complete",
        "Flight": "KL - KLM",
        "Dest": "AMS",
        "AirlineCode": "KL"
    },
    {
        "InterviewId": "2864",
        "InterviewEndDate": "2023-04-13",
        "InterviewState": "Complete",
        "Flight": "KL - KLM",
        "Dest": "AMS",
        "AirlineCode": "KL"
    },
    {
        "InterviewId": "2865",
        "InterviewEndDate": "2023-04-13",
        "InterviewState": "Complete",
        "Flight": "KL - KLM",
        "Dest": "AMS",
        "AirlineCode": "KL"
    },
    {
        "InterviewId": "2866",
        "InterviewEndDate": "2023-04-13",
        "InterviewState": "Complete",
        "Flight": "KL - KLM",
        "Dest": "AMS",
        "AirlineCode": "KL"
    },
    {
        "InterviewId": "2867",
        "InterviewEndDate": "2023-04-14",
        "InterviewState": "Complete",
        "Flight": "BT - Air Baltic",
        "Dest": "RIX",
        "AirlineCode": "BT"
    },
    {
        "InterviewId": "2868",
        "InterviewEndDate": "2023-04-14",
        "InterviewState": "Complete",
        "Flight": "Bt",
        "Dest": "RIX",
        "AirlineCode": "Bt"
    },
    {
        "InterviewId": "2869",
        "InterviewEndDate": "2023-04-14",
        "InterviewState": "Complete",
        "Flight": "BT - Air Baltic",
        "Dest": "RIX",
        "AirlineCode": "BT"
    },
    {
        "InterviewId": "2870",
        "InterviewEndDate": "2023-04-14",
        "InterviewState": "Complete",
        "Flight": "BT - Air Baltic",
        "Dest": "RIX",
        "AirlineCode": "BT"
    },
    {
        "InterviewId": "2871",
        "InterviewEndDate": "2023-04-14",
        "InterviewState": "Complete",
        "Flight": "BT - Air Baltic",
        "Dest": "RIX",
        "AirlineCode": "BT"
    },
    {
        "InterviewId": "2873",
        "InterviewEndDate": "2023-04-16",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "MUC",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "2874",
        "InterviewEndDate": "2023-04-16",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "MUC",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "2875",
        "InterviewEndDate": "2023-04-16",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "MUC",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "2887",
        "InterviewEndDate": "2023-04-16",
        "InterviewState": "Complete",
        "Flight": "KL - KLM",
        "Dest": "AMS",
        "AirlineCode": "KL"
    },
    {
        "InterviewId": "2888",
        "InterviewEndDate": "2023-04-16",
        "InterviewState": "Complete",
        "Flight": "KL - KLM",
        "Dest": "AMS",
        "AirlineCode": "KL"
    },
    {
        "InterviewId": "2889",
        "InterviewEndDate": "2023-04-16",
        "InterviewState": "Complete",
        "Flight": "KL - KLM",
        "Dest": "AMS",
        "AirlineCode": "KL"
    },
    {
        "InterviewId": "2890",
        "InterviewEndDate": "2023-04-16",
        "InterviewState": "Complete",
        "Flight": "KL - KLM",
        "Dest": "AMS",
        "AirlineCode": "KL"
    },
    {
        "InterviewId": "2891",
        "InterviewEndDate": "2023-04-16",
        "InterviewState": "Complete",
        "Flight": "KL - KLM",
        "Dest": "AMS",
        "AirlineCode": "KL"
    },
    {
        "InterviewId": "2892",
        "InterviewEndDate": "2023-04-16",
        "InterviewState": "Complete",
        "Flight": "KL - KLM",
        "Dest": "AMS",
        "AirlineCode": "KL"
    },
    {
        "InterviewId": "2893",
        "InterviewEndDate": "2023-04-16",
        "InterviewState": "Complete",
        "Flight": "KL - KLM",
        "Dest": "AMS",
        "AirlineCode": "KL"
    },
    {
        "InterviewId": "2895",
        "InterviewEndDate": "2023-04-17",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "EDI",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "2902",
        "InterviewEndDate": "2023-04-17",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "EDI",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "2906",
        "InterviewEndDate": "2023-04-17",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "EDI",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "2907",
        "InterviewEndDate": "2023-04-17",
        "InterviewState": "Complete",
        "Flight": "TK - Turkish Airlines",
        "Dest": "IST",
        "AirlineCode": "TK"
    },
    {
        "InterviewId": "2909",
        "InterviewEndDate": "2023-04-17",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "EDI",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "2910",
        "InterviewEndDate": "2023-04-17",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "EDI",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "2913",
        "InterviewEndDate": "2023-04-17",
        "InterviewState": "Complete",
        "Flight": "TK - Turkish Airlines",
        "Dest": "IST",
        "AirlineCode": "TK"
    },
    {
        "InterviewId": "2917",
        "InterviewEndDate": "2023-04-17",
        "InterviewState": "Complete",
        "Flight": "CAT - Global Reach Aviation",
        "Dest": "SSH",
        "AirlineCode": "CAT"
    },
    {
        "InterviewId": "2918",
        "InterviewEndDate": "2023-04-17",
        "InterviewState": "Complete",
        "Flight": "CAT - Global Reach Aviation",
        "Dest": "SSH",
        "AirlineCode": "CAT"
    },
    {
        "InterviewId": "2920",
        "InterviewEndDate": "2023-04-17",
        "InterviewState": "Complete",
        "Flight": "CAT - Global Reach Aviation",
        "Dest": "SSH",
        "AirlineCode": "CAT"
    },
    {
        "InterviewId": "2922",
        "InterviewEndDate": "2023-04-17",
        "InterviewState": "Complete",
        "Flight": "CAT - Global Reach Aviation",
        "Dest": "SSH",
        "AirlineCode": "CAT"
    },
    {
        "InterviewId": "2923",
        "InterviewEndDate": "2023-04-18",
        "InterviewState": "Complete",
        "Flight": "KL - KLM",
        "Dest": "AMS",
        "AirlineCode": "KL"
    },
    {
        "InterviewId": "2924",
        "InterviewEndDate": "2023-04-18",
        "InterviewState": "Complete",
        "Flight": "KL - KLM",
        "Dest": "AMS",
        "AirlineCode": "KL"
    },
    {
        "InterviewId": "2925",
        "InterviewEndDate": "2023-04-18",
        "InterviewState": "Complete",
        "Flight": "KL - KLM",
        "Dest": "AMS",
        "AirlineCode": "KL"
    },
    {
        "InterviewId": "2928",
        "InterviewEndDate": "2023-04-18",
        "InterviewState": "Complete",
        "Flight": "KL - KLM",
        "Dest": "AMS",
        "AirlineCode": "KL"
    },
    {
        "InterviewId": "2930",
        "InterviewEndDate": "2023-04-18",
        "InterviewState": "Complete",
        "Flight": "KL - KLM",
        "Dest": "AMS",
        "AirlineCode": "KL"
    },
    {
        "InterviewId": "2931",
        "InterviewEndDate": "2023-04-18",
        "InterviewState": "Complete",
        "Flight": "KL - KLM",
        "Dest": "AMS",
        "AirlineCode": "KL"
    },
    {
        "InterviewId": "2933",
        "InterviewEndDate": "2023-04-18",
        "InterviewState": "Complete",
        "Flight": "BA - British Airways",
        "Dest": "MAN",
        "AirlineCode": "BA"
    },
    {
        "InterviewId": "2937",
        "InterviewEndDate": "2023-04-18",
        "InterviewState": "Complete",
        "Flight": "BA - British Airways",
        "Dest": "MAN",
        "AirlineCode": "BA"
    },
    {
        "InterviewId": "2938",
        "InterviewEndDate": "2023-04-18",
        "InterviewState": "Complete",
        "Flight": "BA - British Airways",
        "Dest": "MAN",
        "AirlineCode": "BA"
    },
    {
        "InterviewId": "2942",
        "InterviewEndDate": "2023-04-18",
        "InterviewState": "Complete",
        "Flight": "Sn",
        "Dest": "BRU",
        "AirlineCode": "Sn"
    },
    {
        "InterviewId": "2944",
        "InterviewEndDate": "2023-04-18",
        "InterviewState": "Complete",
        "Flight": "Sn",
        "Dest": "BRU",
        "AirlineCode": "Sn"
    },
    {
        "InterviewId": "2946",
        "InterviewEndDate": "2023-04-18",
        "InterviewState": "Complete",
        "Flight": "Sn",
        "Dest": "BRU",
        "AirlineCode": "Sn"
    },
    {
        "InterviewId": "2947",
        "InterviewEndDate": "2023-04-18",
        "InterviewState": "Complete",
        "Flight": "Sn",
        "Dest": "BRU",
        "AirlineCode": "Sn"
    },
    {
        "InterviewId": "2948",
        "InterviewEndDate": "2023-04-18",
        "InterviewState": "Complete",
        "Flight": "Sn",
        "Dest": "BRU",
        "AirlineCode": "Sn"
    },
    {
        "InterviewId": "2950",
        "InterviewEndDate": "2023-04-18",
        "InterviewState": "Complete",
        "Flight": "AF - AIR FRANCE",
        "Dest": "CDG",
        "AirlineCode": "AF"
    },
    {
        "InterviewId": "2952",
        "InterviewEndDate": "2023-04-18",
        "InterviewState": "Complete",
        "Flight": "AF - AIR FRANCE",
        "Dest": "CDG",
        "AirlineCode": "AF"
    },
    {
        "InterviewId": "2955",
        "InterviewEndDate": "2023-04-18",
        "InterviewState": "Complete",
        "Flight": "AF - AIR FRANCE",
        "Dest": "CDG",
        "AirlineCode": "AF"
    },
    {
        "InterviewId": "2957",
        "InterviewEndDate": "2023-04-18",
        "InterviewState": "Complete",
        "Flight": "AF - AIR FRANCE",
        "Dest": "CDG",
        "AirlineCode": "AF"
    },
    {
        "InterviewId": "2963",
        "InterviewEndDate": "2023-04-19",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "ALC",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "2964",
        "InterviewEndDate": "2023-04-19",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "ALC",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "2965",
        "InterviewEndDate": "2023-04-19",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "ALC",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "2966",
        "InterviewEndDate": "2023-04-19",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "ALC",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "2967",
        "InterviewEndDate": "2023-04-19",
        "InterviewState": "Complete",
        "Flight": "SK - Scandinavian Airlines System (SAS)",
        "Dest": "ARN",
        "AirlineCode": "SK"
    },
    {
        "InterviewId": "2972",
        "InterviewEndDate": "2023-04-19",
        "InterviewState": "Complete",
        "Flight": "SK - Scandinavian Airlines System (SAS)",
        "Dest": "ARN",
        "AirlineCode": "SK"
    },
    {
        "InterviewId": "2973",
        "InterviewEndDate": "2023-04-19",
        "InterviewState": "Complete",
        "Flight": "SK - Scandinavian Airlines System (SAS)",
        "Dest": "ARN",
        "AirlineCode": "SK"
    },
    {
        "InterviewId": "2974",
        "InterviewEndDate": "2023-04-19",
        "InterviewState": "Complete",
        "Flight": "SK - Scandinavian Airlines System (SAS)",
        "Dest": "ARN",
        "AirlineCode": "SK"
    },
    {
        "InterviewId": "2978",
        "InterviewEndDate": "2023-04-20",
        "InterviewState": "Complete",
        "Flight": "SK - Scandinavian Airlines System (SAS)",
        "Dest": "OSL",
        "AirlineCode": "SK"
    },
    {
        "InterviewId": "2979",
        "InterviewEndDate": "2023-04-20",
        "InterviewState": "Complete",
        "Flight": "SK - Scandinavian Airlines System (SAS)",
        "Dest": "OSL",
        "AirlineCode": "SK"
    },
    {
        "InterviewId": "2980",
        "InterviewEndDate": "2023-04-20",
        "InterviewState": "Complete",
        "Flight": "SK - Scandinavian Airlines System (SAS)",
        "Dest": "OSL",
        "AirlineCode": "SK"
    },
    {
        "InterviewId": "2981",
        "InterviewEndDate": "2023-04-20",
        "InterviewState": "Complete",
        "Flight": "SK - Scandinavian Airlines System (SAS)",
        "Dest": "OSL",
        "AirlineCode": "SK"
    },
    {
        "InterviewId": "2982",
        "InterviewEndDate": "2023-04-20",
        "InterviewState": "Complete",
        "Flight": "SK - Scandinavian Airlines System (SAS)",
        "Dest": "OSL",
        "AirlineCode": "SK"
    },
    {
        "InterviewId": "2984",
        "InterviewEndDate": "2023-04-20",
        "InterviewState": "Complete",
        "Flight": "SN - Brussels Airlines",
        "Dest": "BRU",
        "AirlineCode": "SN"
    },
    {
        "InterviewId": "2985",
        "InterviewEndDate": "2023-04-20",
        "InterviewState": "Complete",
        "Flight": "SN - Brussels Airlines",
        "Dest": "BRU",
        "AirlineCode": "SN"
    },
    {
        "InterviewId": "2986",
        "InterviewEndDate": "2023-04-20",
        "InterviewState": "Complete",
        "Flight": "SN - Brussels Airlines",
        "Dest": "BRU",
        "AirlineCode": "SN"
    },
    {
        "InterviewId": "2987",
        "InterviewEndDate": "2023-04-20",
        "InterviewState": "Complete",
        "Flight": "SN - Brussels Airlines",
        "Dest": "BRU",
        "AirlineCode": "SN"
    },
    {
        "InterviewId": "2994",
        "InterviewEndDate": "2023-04-28",
        "InterviewState": "Complete",
        "Flight": "KL - KLM",
        "Dest": "AMS",
        "AirlineCode": "KL"
    },
    {
        "InterviewId": "2995",
        "InterviewEndDate": "2023-04-28",
        "InterviewState": "Complete",
        "Flight": "KL - KLM",
        "Dest": "AMS",
        "AirlineCode": "KL"
    },
    {
        "InterviewId": "2996",
        "InterviewEndDate": "2023-04-28",
        "InterviewState": "Complete",
        "Flight": "KL - KLM",
        "Dest": "AMS",
        "AirlineCode": "KL"
    },
    {
        "InterviewId": "2997",
        "InterviewEndDate": "2023-04-30",
        "InterviewState": "Complete",
        "Flight": "DK - Sunclass Airlines",
        "Dest": "RHO",
        "AirlineCode": "DK"
    },
    {
        "InterviewId": "2998",
        "InterviewEndDate": "2023-04-30",
        "InterviewState": "Complete",
        "Flight": "DK - Sunclass Airlines",
        "Dest": "RHO",
        "AirlineCode": "DK"
    },
    {
        "InterviewId": "2999",
        "InterviewEndDate": "2023-04-30",
        "InterviewState": "Complete",
        "Flight": "DK - Sunclass Airlines",
        "Dest": "RHO",
        "AirlineCode": "DK"
    },
    {
        "InterviewId": "3000",
        "InterviewEndDate": "2023-04-30",
        "InterviewState": "Complete",
        "Flight": "DK - Sunclass Airlines",
        "Dest": "RHO",
        "AirlineCode": "DK"
    },
    {
        "InterviewId": "3001",
        "InterviewEndDate": "2023-04-30",
        "InterviewState": "Complete",
        "Flight": "DK - Sunclass Airlines",
        "Dest": "RHO",
        "AirlineCode": "DK"
    },
    {
        "InterviewId": "3002",
        "InterviewEndDate": "2023-04-30",
        "InterviewState": "Complete",
        "Flight": "DK - Sunclass Airlines",
        "Dest": "RHO",
        "AirlineCode": "DK"
    },
    {
        "InterviewId": "3005",
        "InterviewEndDate": "2023-04-30",
        "InterviewState": "Complete",
        "Flight": "CAT - Global Reach Aviation",
        "Dest": "BGY",
        "AirlineCode": "CAT"
    },
    {
        "InterviewId": "3007",
        "InterviewEndDate": "2023-04-30",
        "InterviewState": "Complete",
        "Flight": "CAT - Global Reach Aviation",
        "Dest": "BGY",
        "AirlineCode": "CAT"
    },
    {
        "InterviewId": "3008",
        "InterviewEndDate": "2023-04-30",
        "InterviewState": "Complete",
        "Flight": "CAT - Global Reach Aviation",
        "Dest": "BGY",
        "AirlineCode": "CAT"
    },
    {
        "InterviewId": "3009",
        "InterviewEndDate": "2023-04-30",
        "InterviewState": "Complete",
        "Flight": "CAT - Global Reach Aviation",
        "Dest": "BGY",
        "AirlineCode": "CAT"
    },
    {
        "InterviewId": "3010",
        "InterviewEndDate": "2023-04-30",
        "InterviewState": "Complete",
        "Flight": "CAT - Global Reach Aviation",
        "Dest": "BGY",
        "AirlineCode": "CAT"
    },
    {
        "InterviewId": "3011",
        "InterviewEndDate": "2023-04-30",
        "InterviewState": "Complete",
        "Flight": "CAT - Global Reach Aviation",
        "Dest": "BGY",
        "AirlineCode": "CAT"
    },
    {
        "InterviewId": "3012",
        "InterviewEndDate": "2023-04-30",
        "InterviewState": "Complete",
        "Flight": "CAT - Global Reach Aviation",
        "Dest": "BGY",
        "AirlineCode": "CAT"
    },
    {
        "InterviewId": "3013",
        "InterviewEndDate": "2023-04-30",
        "InterviewState": "Complete",
        "Flight": "PC - Pegasus Hava Tasimaciligi",
        "Dest": "AYT",
        "AirlineCode": "PC"
    },
    {
        "InterviewId": "3014",
        "InterviewEndDate": "2023-04-30",
        "InterviewState": "Complete",
        "Flight": "PC - Pegasus Hava Tasimaciligi",
        "Dest": "AYT",
        "AirlineCode": "PC"
    },
    {
        "InterviewId": "3015",
        "InterviewEndDate": "2023-04-30",
        "InterviewState": "Complete",
        "Flight": "PC - Pegasus Hava Tasimaciligi",
        "Dest": "AYT",
        "AirlineCode": "PC"
    },
    {
        "InterviewId": "3016",
        "InterviewEndDate": "2023-04-30",
        "InterviewState": "Complete",
        "Flight": "PC - Pegasus Hava Tasimaciligi",
        "Dest": "AYT",
        "AirlineCode": "PC"
    },
    {
        "InterviewId": "3018",
        "InterviewEndDate": "2023-04-30",
        "InterviewState": "Complete",
        "Flight": "PC - Pegasus Hava Tasimaciligi",
        "Dest": "AYT",
        "AirlineCode": "PC"
    },
    {
        "InterviewId": "3019",
        "InterviewEndDate": "2023-04-30",
        "InterviewState": "Complete",
        "Flight": "PC - Pegasus Hava Tasimaciligi",
        "Dest": "AYT",
        "AirlineCode": "PC"
    },
    {
        "InterviewId": "3025",
        "InterviewEndDate": "2023-04-30",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "MAD",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "3026",
        "InterviewEndDate": "2023-04-30",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "MAD",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "3027",
        "InterviewEndDate": "2023-04-30",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "MAD",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "3028",
        "InterviewEndDate": "2023-04-30",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "MAD",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "3029",
        "InterviewEndDate": "2023-04-30",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "MAD",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "3030",
        "InterviewEndDate": "2023-04-30",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "MAD",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "3037",
        "InterviewEndDate": "2023-04-30",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "PMI",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "3038",
        "InterviewEndDate": "2023-04-30",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "PMI",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "3039",
        "InterviewEndDate": "2023-04-30",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "PMI",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "3040",
        "InterviewEndDate": "2023-04-30",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "PMI",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "3043",
        "InterviewEndDate": "2023-04-30",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "DUB",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "3044",
        "InterviewEndDate": "2023-04-30",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "DUB",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "3045",
        "InterviewEndDate": "2023-04-30",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "DUB",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "3046",
        "InterviewEndDate": "2023-04-30",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "DUB",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "3047",
        "InterviewEndDate": "2023-05-01",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "AGP",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "3048",
        "InterviewEndDate": "2023-05-01",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "AGP",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "3049",
        "InterviewEndDate": "2023-05-01",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "AGP",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "3051",
        "InterviewEndDate": "2023-05-01",
        "InterviewState": "Complete",
        "Flight": "PC - Pegasus Hava Tasimaciligi",
        "Dest": "AYT",
        "AirlineCode": "PC"
    },
    {
        "InterviewId": "3052",
        "InterviewEndDate": "2023-05-01",
        "InterviewState": "Complete",
        "Flight": "PC - Pegasus Hava Tasimaciligi",
        "Dest": "AYT",
        "AirlineCode": "PC"
    },
    {
        "InterviewId": "3053",
        "InterviewEndDate": "2023-05-01",
        "InterviewState": "Complete",
        "Flight": "PC - Pegasus Hava Tasimaciligi",
        "Dest": "AYT",
        "AirlineCode": "PC"
    },
    {
        "InterviewId": "3054",
        "InterviewEndDate": "2023-05-01",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "STN",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "3055",
        "InterviewEndDate": "2023-05-01",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "STN",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "3056",
        "InterviewEndDate": "2023-05-01",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "STN",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "3057",
        "InterviewEndDate": "2023-05-01",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "ALC",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "3058",
        "InterviewEndDate": "2023-05-01",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "ALC",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "3059",
        "InterviewEndDate": "2023-05-01",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "ALC",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "3060",
        "InterviewEndDate": "2023-05-02",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "SVQ",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "3063",
        "InterviewEndDate": "2023-05-02",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "SVQ",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "3064",
        "InterviewEndDate": "2023-05-02",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "SVQ",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "3065",
        "InterviewEndDate": "2023-05-02",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "SVQ",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "3068",
        "InterviewEndDate": "2023-05-02",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "SVQ",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "3071",
        "InterviewEndDate": "2023-05-02",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "SVQ",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "3073",
        "InterviewEndDate": "2023-05-02",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "SVQ",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "3076",
        "InterviewEndDate": "2023-05-02",
        "InterviewState": "Complete",
        "Flight": "SK - Scandinavian Airlines System (SAS",
        "Dest": "OSL",
        "AirlineCode": "SK"
    },
    {
        "InterviewId": "3080",
        "InterviewEndDate": "2023-05-03",
        "InterviewState": "Complete",
        "Flight": "SN - Brussels Airlines",
        "Dest": "BRU",
        "AirlineCode": "SN"
    },
    {
        "InterviewId": "3082",
        "InterviewEndDate": "2023-05-03",
        "InterviewState": "Complete",
        "Flight": "SN - Brussels Airlines",
        "Dest": "BRU",
        "AirlineCode": "SN"
    },
    {
        "InterviewId": "3091",
        "InterviewEndDate": "2023-05-03",
        "InterviewState": "Complete",
        "Flight": "KL - KLM",
        "Dest": "AMS",
        "AirlineCode": "KL"
    },
    {
        "InterviewId": "3092",
        "InterviewEndDate": "2023-05-03",
        "InterviewState": "Complete",
        "Flight": "KL - KLM",
        "Dest": "AMS",
        "AirlineCode": "KL"
    },
    {
        "InterviewId": "3095",
        "InterviewEndDate": "2023-05-03",
        "InterviewState": "Complete",
        "Flight": "KL - KLM",
        "Dest": "AMS",
        "AirlineCode": "KL"
    },
    {
        "InterviewId": "3097",
        "InterviewEndDate": "2023-05-03",
        "InterviewState": "Complete",
        "Flight": "KL - KLM",
        "Dest": "AMS",
        "AirlineCode": "KL"
    },
    {
        "InterviewId": "3100",
        "InterviewEndDate": "2023-05-03",
        "InterviewState": "Complete",
        "Flight": "KL - KLM",
        "Dest": "AMS",
        "AirlineCode": "KL"
    },
    {
        "InterviewId": "3101",
        "InterviewEndDate": "2023-05-03",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "TSF",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "3103",
        "InterviewEndDate": "2023-05-03",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "TSF",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "3105",
        "InterviewEndDate": "2023-05-03",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "TSF",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "3107",
        "InterviewEndDate": "2023-05-03",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "TSF",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "3109",
        "InterviewEndDate": "2023-05-03",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "TSF",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "3111",
        "InterviewEndDate": "2023-05-04",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "KRK",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "3120",
        "InterviewEndDate": "2023-05-04",
        "InterviewState": "Complete",
        "Flight": "KL - KLM",
        "Dest": "AMS",
        "AirlineCode": "KL"
    },
    {
        "InterviewId": "3121",
        "InterviewEndDate": "2023-05-04",
        "InterviewState": "Complete",
        "Flight": "KL - KLM",
        "Dest": "AMS",
        "AirlineCode": "KL"
    },
    {
        "InterviewId": "3125",
        "InterviewEndDate": "2023-05-07",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "MUC",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "3126",
        "InterviewEndDate": "2023-05-07",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "MUC",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "3127",
        "InterviewEndDate": "2023-05-07",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "MUC",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "3128",
        "InterviewEndDate": "2023-05-07",
        "InterviewState": "Complete",
        "Flight": "BT - Air Baltic",
        "Dest": "RIX",
        "AirlineCode": "BT"
    },
    {
        "InterviewId": "3129",
        "InterviewEndDate": "2023-05-07",
        "InterviewState": "Complete",
        "Flight": "BT - Air Baltic",
        "Dest": "RIX",
        "AirlineCode": "BT"
    },
    {
        "InterviewId": "3130",
        "InterviewEndDate": "2023-05-07",
        "InterviewState": "Complete",
        "Flight": "BT - Air Baltic",
        "Dest": "RIX",
        "AirlineCode": "BT"
    },
    {
        "InterviewId": "3131",
        "InterviewEndDate": "2023-05-11",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "AGP",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "3132",
        "InterviewEndDate": "2023-05-11",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "AGP",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "3133",
        "InterviewEndDate": "2023-05-11",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "AGP",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "3134",
        "InterviewEndDate": "2023-05-11",
        "InterviewState": "Complete",
        "Flight": "BA - British Airways",
        "Dest": "LCY",
        "AirlineCode": "BA"
    },
    {
        "InterviewId": "3135",
        "InterviewEndDate": "2023-05-11",
        "InterviewState": "Complete",
        "Flight": "BA - British Airways",
        "Dest": "LCY",
        "AirlineCode": "BA"
    },
    {
        "InterviewId": "3136",
        "InterviewEndDate": "2023-05-11",
        "InterviewState": "Complete",
        "Flight": "BA - British Airways",
        "Dest": "LCY",
        "AirlineCode": "BA"
    },
    {
        "InterviewId": "3137",
        "InterviewEndDate": "2023-05-11",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "MAN",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "3138",
        "InterviewEndDate": "2023-05-11",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "MAN",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "3139",
        "InterviewEndDate": "2023-05-11",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "MAN",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "3141",
        "InterviewEndDate": "2023-05-12",
        "InterviewState": "Complete",
        "Flight": "AF - AIR FRANCE",
        "Dest": "CDG",
        "AirlineCode": "AF"
    },
    {
        "InterviewId": "3142",
        "InterviewEndDate": "2023-05-12",
        "InterviewState": "Complete",
        "Flight": "AF - AIR FRANCE",
        "Dest": "CDG",
        "AirlineCode": "AF"
    },
    {
        "InterviewId": "3143",
        "InterviewEndDate": "2023-05-12",
        "InterviewState": "Complete",
        "Flight": "AF - AIR FRANCE",
        "Dest": "CDG",
        "AirlineCode": "AF"
    },
    {
        "InterviewId": "3144",
        "InterviewEndDate": "2023-05-12",
        "InterviewState": "Complete",
        "Flight": "AF - AIR FRANCE",
        "Dest": "CDG",
        "AirlineCode": "AF"
    },
    {
        "InterviewId": "3145",
        "InterviewEndDate": "2023-05-12",
        "InterviewState": "Complete",
        "Flight": "AF - AIR FRANCE",
        "Dest": "CDG",
        "AirlineCode": "AF"
    },
    {
        "InterviewId": "3146",
        "InterviewEndDate": "2023-05-12",
        "InterviewState": "Complete",
        "Flight": "AF - AIR FRANCE",
        "Dest": "CDG",
        "AirlineCode": "AF"
    },
    {
        "InterviewId": "3147",
        "InterviewEndDate": "2023-05-12",
        "InterviewState": "Complete",
        "Flight": "AF - AIR FRANCE",
        "Dest": "CDG",
        "AirlineCode": "AF"
    },
    {
        "InterviewId": "3148",
        "InterviewEndDate": "2023-05-12",
        "InterviewState": "Complete",
        "Flight": "KL - KLM",
        "Dest": "AMS",
        "AirlineCode": "KL"
    },
    {
        "InterviewId": "3149",
        "InterviewEndDate": "2023-05-12",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "AHO",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "3151",
        "InterviewEndDate": "2023-05-12",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "AHO",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "3152",
        "InterviewEndDate": "2023-05-12",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "AHO",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "3160",
        "InterviewEndDate": "2023-05-14",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "TRN",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "3161",
        "InterviewEndDate": "2023-05-14",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "TRN",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "3162",
        "InterviewEndDate": "2023-05-14",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "TRN",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "3164",
        "InterviewEndDate": "2023-05-14",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "TRN",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "3165",
        "InterviewEndDate": "2023-05-14",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "TRN",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "3166",
        "InterviewEndDate": "2023-05-14",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "PMI",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "3168",
        "InterviewEndDate": "2023-05-14",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "PMI",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "3169",
        "InterviewEndDate": "2023-05-14",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "PMI",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "3170",
        "InterviewEndDate": "2023-05-14",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "PMI",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "3171",
        "InterviewEndDate": "2023-05-14",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "PMI",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "3172",
        "InterviewEndDate": "2023-05-15",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "STN",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "3173",
        "InterviewEndDate": "2023-05-15",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "STN",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "3174",
        "InterviewEndDate": "2023-05-15",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "STN",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "3175",
        "InterviewEndDate": "2023-05-15",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "ALC",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "3176",
        "InterviewEndDate": "2023-05-15",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "ALC",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "3177",
        "InterviewEndDate": "2023-05-15",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "ALC",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "3182",
        "InterviewEndDate": "2023-05-23",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "OPO",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "3183",
        "InterviewEndDate": "2023-05-23",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "PDL",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "3185",
        "InterviewEndDate": "2023-05-23",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "OPO",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "3186",
        "InterviewEndDate": "2023-05-23",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "OPO",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "3187",
        "InterviewEndDate": "2023-05-23",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "OPO",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "3188",
        "InterviewEndDate": "2023-05-23",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "OPO",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "3189",
        "InterviewEndDate": "2023-05-23",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "VNO",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "3191",
        "InterviewEndDate": "2023-05-23",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "VNO",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "3192",
        "InterviewEndDate": "2023-05-23",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "VNO",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "3193",
        "InterviewEndDate": "2023-05-23",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "VNO",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "3194",
        "InterviewEndDate": "2023-05-23",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "VNO",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "3195",
        "InterviewEndDate": "2023-05-23",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "VNO",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "3200",
        "InterviewEndDate": "2023-05-23",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "BGY",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "3201",
        "InterviewEndDate": "2023-05-23",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "BGY",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "3202",
        "InterviewEndDate": "2023-05-23",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "BGY",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "3203",
        "InterviewEndDate": "2023-05-23",
        "InterviewState": "Complete",
        "Flight": "KL - KLM",
        "Dest": "AMS",
        "AirlineCode": "KL"
    },
    {
        "InterviewId": "3204",
        "InterviewEndDate": "2023-05-23",
        "InterviewState": "Complete",
        "Flight": "Klm",
        "Dest": "AMS",
        "AirlineCode": "Klm"
    },
    {
        "InterviewId": "3205",
        "InterviewEndDate": "2023-05-23",
        "InterviewState": "Complete",
        "Flight": "KL - KLM",
        "Dest": "AMS",
        "AirlineCode": "KL"
    },
    {
        "InterviewId": "3206",
        "InterviewEndDate": "2023-05-23",
        "InterviewState": "Complete",
        "Flight": "Klm",
        "Dest": "AMS",
        "AirlineCode": "Klm"
    },
    {
        "InterviewId": "3207",
        "InterviewEndDate": "2023-05-23",
        "InterviewState": "Complete",
        "Flight": "KL - KLM",
        "Dest": "AMS",
        "AirlineCode": "KL"
    },
    {
        "InterviewId": "3208",
        "InterviewEndDate": "2023-05-23",
        "InterviewState": "Complete",
        "Flight": "KL - KLM",
        "Dest": "AMS",
        "AirlineCode": "KL"
    },
    {
        "InterviewId": "3209",
        "InterviewEndDate": "2023-05-23",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "EDI",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "3211",
        "InterviewEndDate": "2023-05-23",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "DUB",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "3212",
        "InterviewEndDate": "2023-05-23",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "DUB",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "3213",
        "InterviewEndDate": "2023-05-23",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "DUB",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "3214",
        "InterviewEndDate": "2023-05-23",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "DUB",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "3215",
        "InterviewEndDate": "2023-05-23",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "EDI",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "3217",
        "InterviewEndDate": "2023-05-23",
        "InterviewState": "Complete",
        "Flight": "KL - KLM",
        "Dest": "AMS",
        "AirlineCode": "KL"
    },
    {
        "InterviewId": "3218",
        "InterviewEndDate": "2023-05-23",
        "InterviewState": "Complete",
        "Flight": "KL - KLM",
        "Dest": "AMS",
        "AirlineCode": "KL"
    },
    {
        "InterviewId": "3219",
        "InterviewEndDate": "2023-05-23",
        "InterviewState": "Complete",
        "Flight": "KL - KLM",
        "Dest": "AMS",
        "AirlineCode": "KL"
    },
    {
        "InterviewId": "3221",
        "InterviewEndDate": "2023-05-23",
        "InterviewState": "Complete",
        "Flight": "KL - KLM",
        "Dest": "AMS",
        "AirlineCode": "KL"
    },
    {
        "InterviewId": "3222",
        "InterviewEndDate": "2023-05-23",
        "InterviewState": "Complete",
        "Flight": "KL - KLM",
        "Dest": "AMS",
        "AirlineCode": "KL"
    },
    {
        "InterviewId": "3223",
        "InterviewEndDate": "2023-05-23",
        "InterviewState": "Complete",
        "Flight": "AF - AIR FRANCE",
        "Dest": "CDG",
        "AirlineCode": "AF"
    },
    {
        "InterviewId": "3224",
        "InterviewEndDate": "2023-05-23",
        "InterviewState": "Complete",
        "Flight": "AF - AIR FRANCE",
        "Dest": "CDG",
        "AirlineCode": "AF"
    },
    {
        "InterviewId": "3225",
        "InterviewEndDate": "2023-05-23",
        "InterviewState": "Complete",
        "Flight": "AF - AIR FRANCE",
        "Dest": "CDG",
        "AirlineCode": "AF"
    },
    {
        "InterviewId": "3229",
        "InterviewEndDate": "2023-05-23",
        "InterviewState": "Complete",
        "Flight": "KL - KLM",
        "Dest": "AMS",
        "AirlineCode": "KL"
    },
    {
        "InterviewId": "3230",
        "InterviewEndDate": "2023-05-23",
        "InterviewState": "Complete",
        "Flight": "Klm",
        "Dest": "AMS",
        "AirlineCode": "Klm"
    },
    {
        "InterviewId": "3231",
        "InterviewEndDate": "2023-05-23",
        "InterviewState": "Complete",
        "Flight": "KL - KLM",
        "Dest": "AMS",
        "AirlineCode": "KL"
    },
    {
        "InterviewId": "3232",
        "InterviewEndDate": "2023-05-23",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "FRA",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "3233",
        "InterviewEndDate": "2023-05-23",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "FRA",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "3234",
        "InterviewEndDate": "2023-05-23",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "FRA",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "3235",
        "InterviewEndDate": "2023-05-23",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "TSF",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "3236",
        "InterviewEndDate": "2023-05-23",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "TSF",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "3237",
        "InterviewEndDate": "2023-05-23",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "TSF",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "3238",
        "InterviewEndDate": "2023-05-23",
        "InterviewState": "Complete",
        "Flight": "FI - Icelandair",
        "Dest": "KEF",
        "AirlineCode": "FI"
    },
    {
        "InterviewId": "3239",
        "InterviewEndDate": "2023-05-23",
        "InterviewState": "Complete",
        "Flight": "FI - Icelandair",
        "Dest": "KEF",
        "AirlineCode": "FI"
    },
    {
        "InterviewId": "3240",
        "InterviewEndDate": "2023-05-23",
        "InterviewState": "Complete",
        "Flight": "FI - Icelandair",
        "Dest": "KEF",
        "AirlineCode": "FI"
    },
    {
        "InterviewId": "3246",
        "InterviewEndDate": "2023-05-30",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "STN",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "3247",
        "InterviewEndDate": "2023-05-30",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "STN",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "3248",
        "InterviewEndDate": "2023-05-30",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "STN",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "3249",
        "InterviewEndDate": "2023-05-30",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "STN",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "3253",
        "InterviewEndDate": "2023-05-30",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "OPO",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "3254",
        "InterviewEndDate": "2023-05-30",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "PDL",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "3255",
        "InterviewEndDate": "2023-05-30",
        "InterviewState": "Complete",
        "Flight": "Fr",
        "Dest": "PDL",
        "AirlineCode": "Fr"
    },
    {
        "InterviewId": "3257",
        "InterviewEndDate": "2023-05-30",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "OPO",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "3261",
        "InterviewEndDate": "2023-05-30",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "BGY",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "3262",
        "InterviewEndDate": "2023-05-30",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "BGY",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "3263",
        "InterviewEndDate": "2023-05-30",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "BGY",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "3264",
        "InterviewEndDate": "2023-05-30",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "BGY",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "3265",
        "InterviewEndDate": "2023-05-30",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "BGY",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "3266",
        "InterviewEndDate": "2023-05-30",
        "InterviewState": "Complete",
        "Flight": "AF - AIR FRANCE",
        "Dest": "CDG",
        "AirlineCode": "AF"
    },
    {
        "InterviewId": "3268",
        "InterviewEndDate": "2023-05-30",
        "InterviewState": "Complete",
        "Flight": "AF - AIR FRANCE",
        "Dest": "ORY",
        "AirlineCode": "AF"
    },
    {
        "InterviewId": "3269",
        "InterviewEndDate": "2023-05-30",
        "InterviewState": "Complete",
        "Flight": "AF - AIR FRANCE",
        "Dest": "CDG",
        "AirlineCode": "AF"
    },
    {
        "InterviewId": "3270",
        "InterviewEndDate": "2023-05-30",
        "InterviewState": "Complete",
        "Flight": "AF - AIR FRANCE",
        "Dest": "CDG",
        "AirlineCode": "AF"
    },
    {
        "InterviewId": "3271",
        "InterviewEndDate": "2023-05-30",
        "InterviewState": "Complete",
        "Flight": "AF - AIR FRANCE",
        "Dest": "CDG",
        "AirlineCode": "AF"
    },
    {
        "InterviewId": "3272",
        "InterviewEndDate": "2023-05-30",
        "InterviewState": "Complete",
        "Flight": "AF - AIR FRANCE",
        "Dest": "CDG",
        "AirlineCode": "AF"
    },
    {
        "InterviewId": "3273",
        "InterviewEndDate": "2023-05-30",
        "InterviewState": "Complete",
        "Flight": "AF - AIR FRANCE",
        "Dest": "CDG",
        "AirlineCode": "AF"
    },
    {
        "InterviewId": "3279",
        "InterviewEndDate": "2023-06-01",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "VCE",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "3280",
        "InterviewEndDate": "2023-06-01",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "VCE",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "3281",
        "InterviewEndDate": "2023-06-01",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "VCE",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "3283",
        "InterviewEndDate": "2023-06-01",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "VCE",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "3284",
        "InterviewEndDate": "2023-06-01",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "PMI",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "3285",
        "InterviewEndDate": "2023-06-01",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "PMI",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "3286",
        "InterviewEndDate": "2023-06-01",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "MAD",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "3287",
        "InterviewEndDate": "2023-06-01",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "MAD",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "3288",
        "InterviewEndDate": "2023-06-01",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "MAD",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "3289",
        "InterviewEndDate": "2023-06-01",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "MAD",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "3290",
        "InterviewEndDate": "2023-06-01",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "MAD",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "3292",
        "InterviewEndDate": "2023-06-01",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "FRA",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "3293",
        "InterviewEndDate": "2023-06-01",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "FRA",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "3294",
        "InterviewEndDate": "2023-06-01",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "FRA",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "3295",
        "InterviewEndDate": "2023-06-01",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "FRA",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "3296",
        "InterviewEndDate": "2023-06-01",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "FRA",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "3297",
        "InterviewEndDate": "2023-06-01",
        "InterviewState": "Complete",
        "Flight": "VY - Vueling Airlines",
        "Dest": "AGP",
        "AirlineCode": "VY"
    },
    {
        "InterviewId": "3299",
        "InterviewEndDate": "2023-06-01",
        "InterviewState": "Complete",
        "Flight": "VY - Vueling Airlines",
        "Dest": "AGP",
        "AirlineCode": "VY"
    },
    {
        "InterviewId": "3300",
        "InterviewEndDate": "2023-06-01",
        "InterviewState": "Complete",
        "Flight": "VY - Vueling Airlines",
        "Dest": "AGP",
        "AirlineCode": "VY"
    },
    {
        "InterviewId": "3301",
        "InterviewEndDate": "2023-06-01",
        "InterviewState": "Complete",
        "Flight": "VY - Vueling Airlines",
        "Dest": "AGP",
        "AirlineCode": "VY"
    },
    {
        "InterviewId": "3302",
        "InterviewEndDate": "2023-06-01",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "FCO",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "3303",
        "InterviewEndDate": "2023-06-01",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "CIA",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "3304",
        "InterviewEndDate": "2023-06-01",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "CIA",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "3305",
        "InterviewEndDate": "2023-06-01",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "FCO",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "3306",
        "InterviewEndDate": "2023-06-01",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "FCO",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "3308",
        "InterviewEndDate": "2023-06-01",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "BGY",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "3309",
        "InterviewEndDate": "2023-06-01",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "BGY",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "3310",
        "InterviewEndDate": "2023-06-01",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "BGY",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "3311",
        "InterviewEndDate": "2023-06-01",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "BGY",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "3315",
        "InterviewEndDate": "2023-06-12",
        "InterviewState": "Complete",
        "Flight": "WF - Widereoe's Flyveselskab",
        "Dest": "BGO",
        "AirlineCode": "WF"
    },
    {
        "InterviewId": "3316",
        "InterviewEndDate": "2023-06-12",
        "InterviewState": "Complete",
        "Flight": "WF - Widereoe's Flyveselskab",
        "Dest": "BGO",
        "AirlineCode": "WF"
    },
    {
        "InterviewId": "3317",
        "InterviewEndDate": "2023-06-12",
        "InterviewState": "Complete",
        "Flight": "WF - Widereoe's Flyveselskab",
        "Dest": "BGO",
        "AirlineCode": "WF"
    },
    {
        "InterviewId": "3320",
        "InterviewEndDate": "2023-06-12",
        "InterviewState": "Complete",
        "Flight": "WF - Widereoe's Flyveselskab",
        "Dest": "BGO",
        "AirlineCode": "WF"
    },
    {
        "InterviewId": "3322",
        "InterviewEndDate": "2023-06-13",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "OPO",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "3323",
        "InterviewEndDate": "2023-06-13",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "OPO",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "3324",
        "InterviewEndDate": "2023-06-13",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "OPO",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "3325",
        "InterviewEndDate": "2023-06-13",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "OPO",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "3326",
        "InterviewEndDate": "2023-06-13",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "OPO",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "3327",
        "InterviewEndDate": "2023-06-13",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "OPO",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "3328",
        "InterviewEndDate": "2023-06-13",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "OPO",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "3334",
        "InterviewEndDate": "2023-06-13",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "VNO",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "3335",
        "InterviewEndDate": "2023-06-13",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "VNO",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "3336",
        "InterviewEndDate": "2023-06-13",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "VNO",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "3339",
        "InterviewEndDate": "2023-06-13",
        "InterviewState": "Complete",
        "Flight": "KL - KLM",
        "Dest": "AMS",
        "AirlineCode": "KL"
    },
    {
        "InterviewId": "3340",
        "InterviewEndDate": "2023-06-13",
        "InterviewState": "Complete",
        "Flight": "KL - KLM",
        "Dest": "AMS",
        "AirlineCode": "KL"
    },
    {
        "InterviewId": "3341",
        "InterviewEndDate": "2023-06-13",
        "InterviewState": "Complete",
        "Flight": "KL - KLM",
        "Dest": "AMS",
        "AirlineCode": "KL"
    },
    {
        "InterviewId": "3343",
        "InterviewEndDate": "2023-06-13",
        "InterviewState": "Complete",
        "Flight": "KL - KLM",
        "Dest": "AMS",
        "AirlineCode": "KL"
    },
    {
        "InterviewId": "3344",
        "InterviewEndDate": "2023-06-13",
        "InterviewState": "Complete",
        "Flight": "KL - KLM",
        "Dest": "AMS",
        "AirlineCode": "KL"
    },
    {
        "InterviewId": "3345",
        "InterviewEndDate": "2023-06-13",
        "InterviewState": "Complete",
        "Flight": "KL - KLM",
        "Dest": "AMS",
        "AirlineCode": "KL"
    },
    {
        "InterviewId": "3348",
        "InterviewEndDate": "2023-06-13",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "BLQ",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "3351",
        "InterviewEndDate": "2023-06-13",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "BLQ",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "3352",
        "InterviewEndDate": "2023-06-13",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "BLQ",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "3353",
        "InterviewEndDate": "2023-06-13",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "BLQ",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "3355",
        "InterviewEndDate": "2023-06-13",
        "InterviewState": "Complete",
        "Flight": "SN - Brussels Airlines",
        "Dest": "CRL",
        "AirlineCode": "SN"
    },
    {
        "InterviewId": "3360",
        "InterviewEndDate": "2023-06-20",
        "InterviewState": "Complete",
        "Flight": "JTD - Jettime",
        "Dest": "PMI",
        "AirlineCode": "JTD"
    },
    {
        "InterviewId": "3361",
        "InterviewEndDate": "2023-06-20",
        "InterviewState": "Complete",
        "Flight": "JTD - Jettime",
        "Dest": "PMI",
        "AirlineCode": "JTD"
    },
    {
        "InterviewId": "3362",
        "InterviewEndDate": "2023-06-20",
        "InterviewState": "Complete",
        "Flight": "JTD - Jettime",
        "Dest": "PMI",
        "AirlineCode": "JTD"
    },
    {
        "InterviewId": "3363",
        "InterviewEndDate": "2023-06-20",
        "InterviewState": "Complete",
        "Flight": "JTD - Jettime",
        "Dest": "PMI",
        "AirlineCode": "JTD"
    },
    {
        "InterviewId": "3364",
        "InterviewEndDate": "2023-06-20",
        "InterviewState": "Complete",
        "Flight": "JTD - Jettime",
        "Dest": "PMI",
        "AirlineCode": "JTD"
    },
    {
        "InterviewId": "3368",
        "InterviewEndDate": "2023-06-20",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "GDN",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "3369",
        "InterviewEndDate": "2023-06-20",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "GDN",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "3370",
        "InterviewEndDate": "2023-06-20",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "GDN",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "3371",
        "InterviewEndDate": "2023-06-20",
        "InterviewState": "Complete",
        "Flight": "DY - Norwegian Air Schuttle",
        "Dest": "OSL",
        "AirlineCode": "DY"
    },
    {
        "InterviewId": "3372",
        "InterviewEndDate": "2023-06-20",
        "InterviewState": "Complete",
        "Flight": "DY - Norwegian Air Schuttle",
        "Dest": "OSL",
        "AirlineCode": "DY"
    },
    {
        "InterviewId": "3373",
        "InterviewEndDate": "2023-06-20",
        "InterviewState": "Complete",
        "Flight": "DY - Norwegian Air Schuttle",
        "Dest": "OSL",
        "AirlineCode": "DY"
    },
    {
        "InterviewId": "3374",
        "InterviewEndDate": "2023-06-20",
        "InterviewState": "Complete",
        "Flight": "DY - Norwegian Air Schuttle",
        "Dest": "OSL",
        "AirlineCode": "DY"
    },
    {
        "InterviewId": "3381",
        "InterviewEndDate": "2023-06-20",
        "InterviewState": "Complete",
        "Flight": "AF - AIR FRANCE",
        "Dest": "CDG",
        "AirlineCode": "AF"
    },
    {
        "InterviewId": "3382",
        "InterviewEndDate": "2023-06-20",
        "InterviewState": "Complete",
        "Flight": "AF - AIR FRANCE",
        "Dest": "CDG",
        "AirlineCode": "AF"
    },
    {
        "InterviewId": "3383",
        "InterviewEndDate": "2023-06-20",
        "InterviewState": "Complete",
        "Flight": "AF - AIR FRANCE",
        "Dest": "CDG",
        "AirlineCode": "AF"
    },
    {
        "InterviewId": "3384",
        "InterviewEndDate": "2023-06-20",
        "InterviewState": "Complete",
        "Flight": "AF - AIR FRANCE",
        "Dest": "CDG",
        "AirlineCode": "AF"
    },
    {
        "InterviewId": "3385",
        "InterviewEndDate": "2023-06-20",
        "InterviewState": "Complete",
        "Flight": "AF - AIR FRANCE",
        "Dest": "CDG",
        "AirlineCode": "AF"
    },
    {
        "InterviewId": "3388",
        "InterviewEndDate": "2023-06-21",
        "InterviewState": "Complete",
        "Flight": "PC - Pegasus Hava Tasimaciligi",
        "Dest": "AYT",
        "AirlineCode": "PC"
    },
    {
        "InterviewId": "3389",
        "InterviewEndDate": "2023-06-21",
        "InterviewState": "Complete",
        "Flight": "PC - Pegasus Hava Tasimaciligi",
        "Dest": "AYT",
        "AirlineCode": "PC"
    },
    {
        "InterviewId": "3395",
        "InterviewEndDate": "2023-06-21",
        "InterviewState": "Complete",
        "Flight": "BA - British Airways",
        "Dest": "LCY",
        "AirlineCode": "BA"
    },
    {
        "InterviewId": "3398",
        "InterviewEndDate": "2023-06-21",
        "InterviewState": "Complete",
        "Flight": "KL - KLM",
        "Dest": "AMS",
        "AirlineCode": "KL"
    },
    {
        "InterviewId": "3399",
        "InterviewEndDate": "2023-06-21",
        "InterviewState": "Complete",
        "Flight": "KL - KLM",
        "Dest": "AMS",
        "AirlineCode": "KL"
    },
    {
        "InterviewId": "3400",
        "InterviewEndDate": "2023-06-21",
        "InterviewState": "Complete",
        "Flight": "KL - KLM",
        "Dest": "AMS",
        "AirlineCode": "KL"
    },
    {
        "InterviewId": "3401",
        "InterviewEndDate": "2023-06-21",
        "InterviewState": "Complete",
        "Flight": "KL - KLM",
        "Dest": "AMS",
        "AirlineCode": "KL"
    },
    {
        "InterviewId": "3402",
        "InterviewEndDate": "2023-06-21",
        "InterviewState": "Complete",
        "Flight": "KL - KLM",
        "Dest": "AMS",
        "AirlineCode": "KL"
    },
    {
        "InterviewId": "3403",
        "InterviewEndDate": "2023-06-21",
        "InterviewState": "Complete",
        "Flight": "GQ - Sky Express",
        "Dest": "HER",
        "AirlineCode": "GQ"
    },
    {
        "InterviewId": "3404",
        "InterviewEndDate": "2023-06-21",
        "InterviewState": "Complete",
        "Flight": "GQ - Sky Express",
        "Dest": "HER",
        "AirlineCode": "GQ"
    },
    {
        "InterviewId": "3405",
        "InterviewEndDate": "2023-06-21",
        "InterviewState": "Complete",
        "Flight": "GQ - Sky Express",
        "Dest": "HER",
        "AirlineCode": "GQ"
    },
    {
        "InterviewId": "3406",
        "InterviewEndDate": "2023-06-21",
        "InterviewState": "Complete",
        "Flight": "GQ - Sky Express",
        "Dest": "HER",
        "AirlineCode": "GQ"
    },
    {
        "InterviewId": "3407",
        "InterviewEndDate": "2023-06-21",
        "InterviewState": "Complete",
        "Flight": "GQ - Sky Express",
        "Dest": "HER",
        "AirlineCode": "GQ"
    },
    {
        "InterviewId": "3408",
        "InterviewEndDate": "2023-06-21",
        "InterviewState": "Complete",
        "Flight": "GQ - Sky Express",
        "Dest": "HER",
        "AirlineCode": "GQ"
    },
    {
        "InterviewId": "3415",
        "InterviewEndDate": "2023-06-21",
        "InterviewState": "Complete",
        "Flight": "JTD - Jettime",
        "Dest": "RHO",
        "AirlineCode": "JTD"
    },
    {
        "InterviewId": "3416",
        "InterviewEndDate": "2023-06-21",
        "InterviewState": "Complete",
        "Flight": "JTD - Jettime",
        "Dest": "RHO",
        "AirlineCode": "JTD"
    },
    {
        "InterviewId": "3418",
        "InterviewEndDate": "2023-06-21",
        "InterviewState": "Complete",
        "Flight": "JTD - Jettime",
        "Dest": "RHO",
        "AirlineCode": "JTD"
    },
    {
        "InterviewId": "3420",
        "InterviewEndDate": "2023-06-21",
        "InterviewState": "Complete",
        "Flight": "JTD - Jettime",
        "Dest": "RHO",
        "AirlineCode": "JTD"
    },
    {
        "InterviewId": "3422",
        "InterviewEndDate": "2023-06-21",
        "InterviewState": "Complete",
        "Flight": "SN - Brussels Airlines",
        "Dest": "BRU",
        "AirlineCode": "SN"
    },
    {
        "InterviewId": "3423",
        "InterviewEndDate": "2023-06-21",
        "InterviewState": "Complete",
        "Flight": "SN - Brussels Airlines",
        "Dest": "BRU",
        "AirlineCode": "SN"
    },
    {
        "InterviewId": "3424",
        "InterviewEndDate": "2023-06-21",
        "InterviewState": "Complete",
        "Flight": "SN - Brussels Airlines",
        "Dest": "BRU",
        "AirlineCode": "SN"
    },
    {
        "InterviewId": "3425",
        "InterviewEndDate": "2023-06-21",
        "InterviewState": "Complete",
        "Flight": "SN - Brussels Airlines",
        "Dest": "BRU",
        "AirlineCode": "SN"
    },
    {
        "InterviewId": "3430",
        "InterviewEndDate": "2023-06-23",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "BRI",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "3431",
        "InterviewEndDate": "2023-06-23",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "BRI",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "3432",
        "InterviewEndDate": "2023-06-23",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "BRI",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "3435",
        "InterviewEndDate": "2023-06-23",
        "InterviewState": "Complete",
        "Flight": "FR - RyanairFri",
        "Dest": "BCN",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "3437",
        "InterviewEndDate": "2023-06-23",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "BCN",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "3439",
        "InterviewEndDate": "2023-06-23",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "BCN",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "3440",
        "InterviewEndDate": "2023-06-23",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "BCN",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "3443",
        "InterviewEndDate": "2023-06-23",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "MLA",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "3447",
        "InterviewEndDate": "2023-06-23",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "MLA",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "3448",
        "InterviewEndDate": "2023-06-23",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "MLA",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "3451",
        "InterviewEndDate": "2023-06-23",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "FRA",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "3452",
        "InterviewEndDate": "2023-06-23",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "FRA",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "3453",
        "InterviewEndDate": "2023-06-23",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "FRA",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "3454",
        "InterviewEndDate": "2023-06-23",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "FRA",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "3455",
        "InterviewEndDate": "2023-06-23",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "FRA",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "3457",
        "InterviewEndDate": "2023-06-23",
        "InterviewState": "Complete",
        "Flight": "KL - KLM",
        "Dest": "AMS",
        "AirlineCode": "KL"
    },
    {
        "InterviewId": "3458",
        "InterviewEndDate": "2023-06-23",
        "InterviewState": "Complete",
        "Flight": "KL - KLM",
        "Dest": "AMS",
        "AirlineCode": "KL"
    },
    {
        "InterviewId": "3459",
        "InterviewEndDate": "2023-06-23",
        "InterviewState": "Complete",
        "Flight": "KL - KLM",
        "Dest": "AMS",
        "AirlineCode": "KL"
    },
    {
        "InterviewId": "3460",
        "InterviewEndDate": "2023-06-23",
        "InterviewState": "Complete",
        "Flight": "KL - KLM",
        "Dest": "AMS",
        "AirlineCode": "KL"
    },
    {
        "InterviewId": "3461",
        "InterviewEndDate": "2023-06-23",
        "InterviewState": "Complete",
        "Flight": "KL - KLM",
        "Dest": "AMS",
        "AirlineCode": "KL"
    },
    {
        "InterviewId": "3462",
        "InterviewEndDate": "2023-06-23",
        "InterviewState": "Complete",
        "Flight": "KL - KLM",
        "Dest": "AMS",
        "AirlineCode": "KL"
    },
    {
        "InterviewId": "3465",
        "InterviewEndDate": "2023-06-23",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "MUC",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "3466",
        "InterviewEndDate": "2023-06-23",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "MUC",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "3467",
        "InterviewEndDate": "2023-06-23",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "MUC",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "3468",
        "InterviewEndDate": "2023-06-23",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "MUC",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "3469",
        "InterviewEndDate": "2023-06-23",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "MUC",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "3470",
        "InterviewEndDate": "2023-06-23",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "MUC",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "3471",
        "InterviewEndDate": "2023-06-23",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "ALC",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "3472",
        "InterviewEndDate": "2023-06-23",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "ALC",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "3474",
        "InterviewEndDate": "2023-06-23",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "ALC",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "3475",
        "InterviewEndDate": "2023-06-23",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "ALC",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "3476",
        "InterviewEndDate": "2023-06-23",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "ALC",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "3477",
        "InterviewEndDate": "2023-06-23",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "ALC",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "3478",
        "InterviewEndDate": "2023-06-23",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "ALC",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "3479",
        "InterviewEndDate": "2023-06-23",
        "InterviewState": "Complete",
        "Flight": "KL - KLM",
        "Dest": "AMS",
        "AirlineCode": "KL"
    },
    {
        "InterviewId": "3482",
        "InterviewEndDate": "2023-06-23",
        "InterviewState": "Complete",
        "Flight": "KL - KLM",
        "Dest": "AMS",
        "AirlineCode": "KL"
    },
    {
        "InterviewId": "3483",
        "InterviewEndDate": "2023-06-23",
        "InterviewState": "Complete",
        "Flight": "KL - KLM",
        "Dest": "AMS",
        "AirlineCode": "KL"
    },
    {
        "InterviewId": "3484",
        "InterviewEndDate": "2023-06-23",
        "InterviewState": "Complete",
        "Flight": "KL - KLM",
        "Dest": "AMS",
        "AirlineCode": "KL"
    },
    {
        "InterviewId": "3485",
        "InterviewEndDate": "2023-06-23",
        "InterviewState": "Complete",
        "Flight": "KL - KLM",
        "Dest": "AMS",
        "AirlineCode": "KL"
    },
    {
        "InterviewId": "3486",
        "InterviewEndDate": "2023-06-23",
        "InterviewState": "Complete",
        "Flight": "KL - KLM",
        "Dest": "AMS",
        "AirlineCode": "KL"
    },
    {
        "InterviewId": "3487",
        "InterviewEndDate": "2023-06-23",
        "InterviewState": "Complete",
        "Flight": "KL - KLM",
        "Dest": "AMS",
        "AirlineCode": "KL"
    },
    {
        "InterviewId": "3490",
        "InterviewEndDate": "2023-06-23",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "FRA",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "3491",
        "InterviewEndDate": "2023-06-23",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "FRA",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "3492",
        "InterviewEndDate": "2023-06-23",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "FRA",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "3493",
        "InterviewEndDate": "2023-06-23",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "FRA",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "3494",
        "InterviewEndDate": "2023-06-23",
        "InterviewState": "Complete",
        "Flight": "KL - KLM",
        "Dest": "FRA",
        "AirlineCode": "KL"
    },
    {
        "InterviewId": "3495",
        "InterviewEndDate": "2023-06-23",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "FRA",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "3496",
        "InterviewEndDate": "2023-06-23",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "FRA",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "3504",
        "InterviewEndDate": "2023-06-29",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "KRK",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "3505",
        "InterviewEndDate": "2023-06-29",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "KRK",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "3506",
        "InterviewEndDate": "2023-06-29",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "KRK",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "3507",
        "InterviewEndDate": "2023-06-29",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "KRK",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "3508",
        "InterviewEndDate": "2023-06-29",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "KRK",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "3509",
        "InterviewEndDate": "2023-06-29",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "KRK",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "3511",
        "InterviewEndDate": "2023-06-29",
        "InterviewState": "Complete",
        "Flight": "BT - Air Baltic",
        "Dest": "RIX",
        "AirlineCode": "BT"
    },
    {
        "InterviewId": "3512",
        "InterviewEndDate": "2023-06-29",
        "InterviewState": "Complete",
        "Flight": "BT - Air Baltic",
        "Dest": "RIX",
        "AirlineCode": "BT"
    },
    {
        "InterviewId": "3513",
        "InterviewEndDate": "2023-06-29",
        "InterviewState": "Complete",
        "Flight": "BT - Air Baltic",
        "Dest": "RIX",
        "AirlineCode": "BT"
    },
    {
        "InterviewId": "3514",
        "InterviewEndDate": "2023-06-29",
        "InterviewState": "Complete",
        "Flight": "BT - Air Baltic",
        "Dest": "RIX",
        "AirlineCode": "BT"
    },
    {
        "InterviewId": "3515",
        "InterviewEndDate": "2023-06-29",
        "InterviewState": "Complete",
        "Flight": "BT - Air Baltic",
        "Dest": "RIX",
        "AirlineCode": "BT"
    },
    {
        "InterviewId": "3516",
        "InterviewEndDate": "2023-06-29",
        "InterviewState": "Complete",
        "Flight": "BT - Air Baltic",
        "Dest": "RIX",
        "AirlineCode": "BT"
    },
    {
        "InterviewId": "3517",
        "InterviewEndDate": "2023-06-29",
        "InterviewState": "Complete",
        "Flight": "BT - Air Baltic",
        "Dest": "RIX",
        "AirlineCode": "BT"
    },
    {
        "InterviewId": "3518",
        "InterviewEndDate": "2023-06-29",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "FRA",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "3524",
        "InterviewEndDate": "2023-07-04",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "STN",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "3525",
        "InterviewEndDate": "2023-06-29",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "STN",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "3526",
        "InterviewEndDate": "2023-06-29",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "STN",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "3528",
        "InterviewEndDate": "2023-07-06",
        "InterviewState": "Complete",
        "Flight": "RC - Atlantic Airways",
        "Dest": "FAE",
        "AirlineCode": "RC"
    },
    {
        "InterviewId": "3529",
        "InterviewEndDate": "2023-07-06",
        "InterviewState": "Complete",
        "Flight": "BUC - European Air Charter",
        "Dest": "FAO",
        "AirlineCode": "BUC"
    },
    {
        "InterviewId": "3530",
        "InterviewEndDate": "2023-07-06",
        "InterviewState": "Complete",
        "Flight": "RC - Atlantic Airways",
        "Dest": "FAE",
        "AirlineCode": "RC"
    },
    {
        "InterviewId": "3531",
        "InterviewEndDate": "2023-07-06",
        "InterviewState": "Complete",
        "Flight": "RC - Atlantic Airways",
        "Dest": "FAE",
        "AirlineCode": "RC"
    },
    {
        "InterviewId": "3532",
        "InterviewEndDate": "2023-07-06",
        "InterviewState": "Complete",
        "Flight": "RC - Atlantic Airways",
        "Dest": "FAE",
        "AirlineCode": "RC"
    },
    {
        "InterviewId": "3533",
        "InterviewEndDate": "2023-07-06",
        "InterviewState": "Complete",
        "Flight": "RC - Atlantic Airways",
        "Dest": "FAE",
        "AirlineCode": "RC"
    },
    {
        "InterviewId": "3534",
        "InterviewEndDate": "2023-07-06",
        "InterviewState": "Complete",
        "Flight": "DX - DAT",
        "Dest": "RNN",
        "AirlineCode": "DX"
    },
    {
        "InterviewId": "3536",
        "InterviewEndDate": "2023-07-06",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "OPO",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "3537",
        "InterviewEndDate": "2023-07-06",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "PXO",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "3538",
        "InterviewEndDate": "2023-07-06",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "OPO",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "3539",
        "InterviewEndDate": "2023-07-06",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "OPO",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "3540",
        "InterviewEndDate": "2023-07-06",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "PXO",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "3541",
        "InterviewEndDate": "2023-07-06",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "OPO",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "3542",
        "InterviewEndDate": "2023-07-06",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "OPO",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "3543",
        "InterviewEndDate": "2023-07-06",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "OPO",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "3544",
        "InterviewEndDate": "2023-07-06",
        "InterviewState": "Complete",
        "Flight": "AF - AIR FRANCE",
        "Dest": "CDG",
        "AirlineCode": "AF"
    },
    {
        "InterviewId": "3545",
        "InterviewEndDate": "2023-07-06",
        "InterviewState": "Complete",
        "Flight": "AF - AIR FRANCE",
        "Dest": "CDG",
        "AirlineCode": "AF"
    },
    {
        "InterviewId": "3546",
        "InterviewEndDate": "2023-07-06",
        "InterviewState": "Complete",
        "Flight": "AF - AIR FRANCE",
        "Dest": "CDG",
        "AirlineCode": "AF"
    },
    {
        "InterviewId": "3547",
        "InterviewEndDate": "2023-07-06",
        "InterviewState": "Complete",
        "Flight": "AF - AIR FRANCE",
        "Dest": "CDG",
        "AirlineCode": "AF"
    },
    {
        "InterviewId": "3548",
        "InterviewEndDate": "2023-07-06",
        "InterviewState": "Complete",
        "Flight": "AF - AIR FRANCE",
        "Dest": "CDG",
        "AirlineCode": "AF"
    },
    {
        "InterviewId": "3549",
        "InterviewEndDate": "2023-07-06",
        "InterviewState": "Complete",
        "Flight": "AF - AIR FRANCE",
        "Dest": "CDG",
        "AirlineCode": "AF"
    },
    {
        "InterviewId": "3550",
        "InterviewEndDate": "2023-07-06",
        "InterviewState": "Complete",
        "Flight": "KL - KLM",
        "Dest": "FRA",
        "AirlineCode": "KL"
    },
    {
        "InterviewId": "3551",
        "InterviewEndDate": "2023-07-06",
        "InterviewState": "Complete",
        "Flight": "AF - AIR FRANCE",
        "Dest": "CDG",
        "AirlineCode": "AF"
    },
    {
        "InterviewId": "3552",
        "InterviewEndDate": "2023-07-06",
        "InterviewState": "Complete",
        "Flight": "Play",
        "Dest": "KEF",
        "AirlineCode": "Play"
    },
    {
        "InterviewId": "3556",
        "InterviewEndDate": "2023-07-06",
        "InterviewState": "Complete",
        "Flight": "Play",
        "Dest": "KEF",
        "AirlineCode": "Play"
    },
    {
        "InterviewId": "3557",
        "InterviewEndDate": "2023-07-06",
        "InterviewState": "Complete",
        "Flight": "Play",
        "Dest": "KEF",
        "AirlineCode": "Play"
    },
    {
        "InterviewId": "3558",
        "InterviewEndDate": "2023-07-06",
        "InterviewState": "Complete",
        "Flight": "Play",
        "Dest": "KEF",
        "AirlineCode": "Play"
    },
    {
        "InterviewId": "3559",
        "InterviewEndDate": "2023-07-06",
        "InterviewState": "Complete",
        "Flight": "Play",
        "Dest": "KEF",
        "AirlineCode": "Play"
    },
    {
        "InterviewId": "3568",
        "InterviewEndDate": "2023-07-08",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "EDI",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "3570",
        "InterviewEndDate": "2023-07-10",
        "InterviewState": "Complete",
        "Flight": "LX - Swiss International Air Lines",
        "Dest": "ZRH",
        "AirlineCode": "LX"
    },
    {
        "InterviewId": "3571",
        "InterviewEndDate": "2023-07-10",
        "InterviewState": "Complete",
        "Flight": "LX - Swiss International Air Lines",
        "Dest": "ZRH",
        "AirlineCode": "LX"
    },
    {
        "InterviewId": "3572",
        "InterviewEndDate": "2023-07-10",
        "InterviewState": "Complete",
        "Flight": "LX - Swiss International Air Lines",
        "Dest": "ZRH",
        "AirlineCode": "LX"
    },
    {
        "InterviewId": "3573",
        "InterviewEndDate": "2023-07-10",
        "InterviewState": "Complete",
        "Flight": "LX - Swiss International Air Lines",
        "Dest": "ZRH",
        "AirlineCode": "LX"
    },
    {
        "InterviewId": "3574",
        "InterviewEndDate": "2023-07-10",
        "InterviewState": "Complete",
        "Flight": "LX - Swiss International Air Lines",
        "Dest": "ZRH",
        "AirlineCode": "LX"
    },
    {
        "InterviewId": "3575",
        "InterviewEndDate": "2023-07-10",
        "InterviewState": "Complete",
        "Flight": "LX - Swiss International Air Lines",
        "Dest": "ZRH",
        "AirlineCode": "LX"
    },
    {
        "InterviewId": "3576",
        "InterviewEndDate": "2023-07-10",
        "InterviewState": "Complete",
        "Flight": "LX - Swiss International Air Lines",
        "Dest": "ZRH",
        "AirlineCode": "LX"
    },
    {
        "InterviewId": "3581",
        "InterviewEndDate": "2023-07-10",
        "InterviewState": "Complete",
        "Flight": "SK - Scandinavian Airlines System (SAS)",
        "Dest": "ARN",
        "AirlineCode": "SK"
    },
    {
        "InterviewId": "3582",
        "InterviewEndDate": "2023-07-10",
        "InterviewState": "Complete",
        "Flight": "SK - Scandinavian Airlines System (SAS)",
        "Dest": "ARN",
        "AirlineCode": "SK"
    },
    {
        "InterviewId": "3589",
        "InterviewEndDate": "2023-07-12",
        "InterviewState": "Complete",
        "Flight": "DY - Norwegian Air Schuttle",
        "Dest": "OSL",
        "AirlineCode": "DY"
    },
    {
        "InterviewId": "3590",
        "InterviewEndDate": "2023-07-12",
        "InterviewState": "Complete",
        "Flight": "DY - Norwegian Air Schuttle",
        "Dest": "OSL",
        "AirlineCode": "DY"
    },
    {
        "InterviewId": "3591",
        "InterviewEndDate": "2023-07-12",
        "InterviewState": "Complete",
        "Flight": "DY - Norwegian Air Schuttle",
        "Dest": "OSL",
        "AirlineCode": "DY"
    },
    {
        "InterviewId": "3592",
        "InterviewEndDate": "2023-07-12",
        "InterviewState": "Complete",
        "Flight": "Dy",
        "Dest": "OSL",
        "AirlineCode": "Dy"
    },
    {
        "InterviewId": "3593",
        "InterviewEndDate": "2023-07-12",
        "InterviewState": "Complete",
        "Flight": "DY - Norwegian Air Schuttle",
        "Dest": "OSL",
        "AirlineCode": "DY"
    },
    {
        "InterviewId": "3596",
        "InterviewEndDate": "2023-07-12",
        "InterviewState": "Complete",
        "Flight": "JTD - Jettime",
        "Dest": "CTA",
        "AirlineCode": "JTD"
    },
    {
        "InterviewId": "3608",
        "InterviewEndDate": "2023-07-13",
        "InterviewState": "Complete",
        "Flight": "BT - Air Baltic",
        "Dest": "RIX",
        "AirlineCode": "BT"
    },
    {
        "InterviewId": "3609",
        "InterviewEndDate": "2023-07-13",
        "InterviewState": "Complete",
        "Flight": "BT - Air Baltic",
        "Dest": "RIX",
        "AirlineCode": "BT"
    },
    {
        "InterviewId": "3614",
        "InterviewEndDate": "2023-07-13",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "FRA",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "3615",
        "InterviewEndDate": "2023-07-13",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "FRA",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "3616",
        "InterviewEndDate": "2023-07-13",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "FRA",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "3617",
        "InterviewEndDate": "2023-07-13",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "FRA",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "3618",
        "InterviewEndDate": "2023-07-13",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "CDG",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "3624",
        "InterviewEndDate": "2023-07-13",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "DUB",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "3625",
        "InterviewEndDate": "2023-07-13",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "DUB",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "3626",
        "InterviewEndDate": "2023-07-13",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "DUB",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "3629",
        "InterviewEndDate": "2023-07-13",
        "InterviewState": "Complete",
        "Flight": "DK - Sunclass Airlines",
        "Dest": "HER",
        "AirlineCode": "DK"
    },
    {
        "InterviewId": "3630",
        "InterviewEndDate": "2023-07-13",
        "InterviewState": "Complete",
        "Flight": "DK - Sunclass Airlines",
        "Dest": "HER",
        "AirlineCode": "DK"
    },
    {
        "InterviewId": "3631",
        "InterviewEndDate": "2023-07-13",
        "InterviewState": "Complete",
        "Flight": "DK - Sunclass Airlines",
        "Dest": "HER",
        "AirlineCode": "DK"
    },
    {
        "InterviewId": "3632",
        "InterviewEndDate": "2023-07-13",
        "InterviewState": "Complete",
        "Flight": "Dk",
        "Dest": "HER",
        "AirlineCode": "Dk"
    },
    {
        "InterviewId": "3633",
        "InterviewEndDate": "2023-07-13",
        "InterviewState": "Complete",
        "Flight": "DK - Sunclass Airlines",
        "Dest": "HER",
        "AirlineCode": "DK"
    },
    {
        "InterviewId": "3634",
        "InterviewEndDate": "2023-07-13",
        "InterviewState": "Complete",
        "Flight": "DK - Sunclass Airlines",
        "Dest": "HER",
        "AirlineCode": "DK"
    },
    {
        "InterviewId": "3638",
        "InterviewEndDate": "2023-07-14",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "ALC",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "3639",
        "InterviewEndDate": "2023-07-14",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "ALC",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "3640",
        "InterviewEndDate": "2023-07-14",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "ALC",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "3641",
        "InterviewEndDate": "2023-07-14",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "ALC",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "3642",
        "InterviewEndDate": "2023-07-14",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "ALC",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "3643",
        "InterviewEndDate": "2023-07-14",
        "InterviewState": "Complete",
        "Flight": "DY - Norwegian Air Schuttle",
        "Dest": "OSL",
        "AirlineCode": "DY"
    },
    {
        "InterviewId": "3644",
        "InterviewEndDate": "2023-07-14",
        "InterviewState": "Complete",
        "Flight": "DY - Norwegian Air Schuttle",
        "Dest": "OSL",
        "AirlineCode": "DY"
    },
    {
        "InterviewId": "3646",
        "InterviewEndDate": "2023-07-14",
        "InterviewState": "Complete",
        "Flight": "DY - Norwegian Air Schuttle",
        "Dest": "OSL",
        "AirlineCode": "DY"
    },
    {
        "InterviewId": "3647",
        "InterviewEndDate": "2023-07-14",
        "InterviewState": "Complete",
        "Flight": "DY - Norwegian Air Schuttle",
        "Dest": "OSL",
        "AirlineCode": "DY"
    },
    {
        "InterviewId": "3648",
        "InterviewEndDate": "2023-07-14",
        "InterviewState": "Complete",
        "Flight": "DY - Norwegian Air Schuttle",
        "Dest": "OSL",
        "AirlineCode": "DY"
    },
    {
        "InterviewId": "3649",
        "InterviewEndDate": "2023-07-14",
        "InterviewState": "Complete",
        "Flight": "DY - Norwegian Air Schuttle",
        "Dest": "OSL",
        "AirlineCode": "DY"
    },
    {
        "InterviewId": "3650",
        "InterviewEndDate": "2023-07-14",
        "InterviewState": "Complete",
        "Flight": "DY - Norwegian Air Schuttle",
        "Dest": "OSL",
        "AirlineCode": "DY"
    },
    {
        "InterviewId": "3652",
        "InterviewEndDate": "2023-07-14",
        "InterviewState": "Complete",
        "Flight": "DY - Norwegian Air Schuttle",
        "Dest": "OSL",
        "AirlineCode": "DY"
    },
    {
        "InterviewId": "3655",
        "InterviewEndDate": "2023-07-24",
        "InterviewState": "Complete",
        "Flight": "LX - Swiss International Air Lines",
        "Dest": "ZRH",
        "AirlineCode": "LX"
    },
    {
        "InterviewId": "3656",
        "InterviewEndDate": "2023-07-14",
        "InterviewState": "Complete",
        "Flight": "LX - Swiss International Air Lines",
        "Dest": "ZRH",
        "AirlineCode": "LX"
    },
    {
        "InterviewId": "3657",
        "InterviewEndDate": "2023-07-14",
        "InterviewState": "Complete",
        "Flight": "LX - Swiss International Air Lines",
        "Dest": "ZRH",
        "AirlineCode": "LX"
    },
    {
        "InterviewId": "3658",
        "InterviewEndDate": "2023-07-14",
        "InterviewState": "Complete",
        "Flight": "LX - Swiss International Air Lines",
        "Dest": "ZRH",
        "AirlineCode": "LX"
    },
    {
        "InterviewId": "3659",
        "InterviewEndDate": "2023-07-14",
        "InterviewState": "Complete",
        "Flight": "LX - Swiss International Air Lines",
        "Dest": "ZRH",
        "AirlineCode": "LX"
    },
    {
        "InterviewId": "3660",
        "InterviewEndDate": "2023-07-14",
        "InterviewState": "Complete",
        "Flight": "LX - Swiss International Air Lines",
        "Dest": "ZRH",
        "AirlineCode": "LX"
    },
    {
        "InterviewId": "3663",
        "InterviewEndDate": "2023-07-24",
        "InterviewState": "Complete",
        "Flight": "SK - Scandinavian Airlines System (SAS)",
        "Dest": "ARN",
        "AirlineCode": "SK"
    },
    {
        "InterviewId": "3664",
        "InterviewEndDate": "2023-07-24",
        "InterviewState": "Complete",
        "Flight": "SK - Scandinavian Airlines System (SAS)",
        "Dest": "ARN",
        "AirlineCode": "SK"
    },
    {
        "InterviewId": "3665",
        "InterviewEndDate": "2023-07-24",
        "InterviewState": "Complete",
        "Flight": "SK - Scandinavian Airlines System (SAS)",
        "Dest": "ARN",
        "AirlineCode": "SK"
    },
    {
        "InterviewId": "3666",
        "InterviewEndDate": "2023-07-24",
        "InterviewState": "Complete",
        "Flight": "SK - Scandinavian Airlines System (SAS)",
        "Dest": "ARN",
        "AirlineCode": "SK"
    },
    {
        "InterviewId": "3667",
        "InterviewEndDate": "2023-07-24",
        "InterviewState": "Complete",
        "Flight": "SK - Scandinavian Airlines System (SAS)",
        "Dest": "ARN",
        "AirlineCode": "SK"
    },
    {
        "InterviewId": "3668",
        "InterviewEndDate": "2023-07-24",
        "InterviewState": "Complete",
        "Flight": "SK - Scandinavian Airlines System (SAS)",
        "Dest": "ARN",
        "AirlineCode": "SK"
    },
    {
        "InterviewId": "3669",
        "InterviewEndDate": "2023-07-24",
        "InterviewState": "Complete",
        "Flight": "JTD - Jettime",
        "Dest": "ZTH",
        "AirlineCode": "JTD"
    },
    {
        "InterviewId": "3670",
        "InterviewEndDate": "2023-07-24",
        "InterviewState": "Complete",
        "Flight": "JTD - Jettime",
        "Dest": "ZTH",
        "AirlineCode": "JTD"
    },
    {
        "InterviewId": "3671",
        "InterviewEndDate": "2023-07-24",
        "InterviewState": "Complete",
        "Flight": "JTD - Jettime",
        "Dest": "ZTH",
        "AirlineCode": "JTD"
    },
    {
        "InterviewId": "3672",
        "InterviewEndDate": "2023-07-24",
        "InterviewState": "Complete",
        "Flight": "JTD - Jettime",
        "Dest": "ZTH",
        "AirlineCode": "JTD"
    },
    {
        "InterviewId": "3673",
        "InterviewEndDate": "2023-07-24",
        "InterviewState": "Complete",
        "Flight": "JTD - Jettime",
        "Dest": "ZTH",
        "AirlineCode": "JTD"
    },
    {
        "InterviewId": "3674",
        "InterviewEndDate": "2023-07-24",
        "InterviewState": "Complete",
        "Flight": "JTD - Jettime",
        "Dest": "ZTH",
        "AirlineCode": "JTD"
    },
    {
        "InterviewId": "3675",
        "InterviewEndDate": "2023-07-24",
        "InterviewState": "Complete",
        "Flight": "JTD - Jettime",
        "Dest": "ZTH",
        "AirlineCode": "JTD"
    },
    {
        "InterviewId": "3676",
        "InterviewEndDate": "2023-07-24",
        "InterviewState": "Complete",
        "Flight": "JTD - Jettime",
        "Dest": "ZTH",
        "AirlineCode": "JTD"
    },
    {
        "InterviewId": "3677",
        "InterviewEndDate": "2023-07-24",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "BRI",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "3678",
        "InterviewEndDate": "2023-07-24",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "BRI",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "3679",
        "InterviewEndDate": "2023-07-24",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "BRI",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "3680",
        "InterviewEndDate": "2023-07-24",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "BRI",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "3681",
        "InterviewEndDate": "2023-07-24",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "BRI",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "3682",
        "InterviewEndDate": "2023-07-24",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "BRI",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "3684",
        "InterviewEndDate": "2023-07-24",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "BRI",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "3685",
        "InterviewEndDate": "2023-07-24",
        "InterviewState": "Complete",
        "Flight": "JTD - Jettime",
        "Dest": "LCA",
        "AirlineCode": "JTD"
    },
    {
        "InterviewId": "3686",
        "InterviewEndDate": "2023-07-24",
        "InterviewState": "Complete",
        "Flight": "JTD - Jettime",
        "Dest": "LCA",
        "AirlineCode": "JTD"
    },
    {
        "InterviewId": "3687",
        "InterviewEndDate": "2023-07-24",
        "InterviewState": "Complete",
        "Flight": "JTD - Jettime",
        "Dest": "LCA",
        "AirlineCode": "JTD"
    },
    {
        "InterviewId": "3688",
        "InterviewEndDate": "2023-07-24",
        "InterviewState": "Complete",
        "Flight": "JTD - Jettime",
        "Dest": "LCA",
        "AirlineCode": "JTD"
    },
    {
        "InterviewId": "3689",
        "InterviewEndDate": "2023-07-24",
        "InterviewState": "Complete",
        "Flight": "JTD - Jettime",
        "Dest": "LCA",
        "AirlineCode": "JTD"
    },
    {
        "InterviewId": "3690",
        "InterviewEndDate": "2023-07-24",
        "InterviewState": "Complete",
        "Flight": "JTD - Jettime",
        "Dest": "LCA",
        "AirlineCode": "JTD"
    },
    {
        "InterviewId": "3691",
        "InterviewEndDate": "2023-07-24",
        "InterviewState": "Complete",
        "Flight": "JTD - Jettime",
        "Dest": "LCA",
        "AirlineCode": "JTD"
    },
    {
        "InterviewId": "3692",
        "InterviewEndDate": "2023-07-24",
        "InterviewState": "Complete",
        "Flight": "JTD - Jettime",
        "Dest": "LCA",
        "AirlineCode": "JTD"
    },
    {
        "InterviewId": "3693",
        "InterviewEndDate": "2023-07-24",
        "InterviewState": "Complete",
        "Flight": "DK - Sunclass Airlines",
        "Dest": "LCA",
        "AirlineCode": "DK"
    },
    {
        "InterviewId": "3694",
        "InterviewEndDate": "2023-07-24",
        "InterviewState": "Complete",
        "Flight": "DK - Sunclass Airlines",
        "Dest": "LCA",
        "AirlineCode": "DK"
    },
    {
        "InterviewId": "3696",
        "InterviewEndDate": "2023-07-24",
        "InterviewState": "Complete",
        "Flight": "DK - Sunclass Airlines",
        "Dest": "LCA",
        "AirlineCode": "DK"
    },
    {
        "InterviewId": "3697",
        "InterviewEndDate": "2023-07-24",
        "InterviewState": "Complete",
        "Flight": "DK - Sunclass Airlines",
        "Dest": "LCA",
        "AirlineCode": "DK"
    },
    {
        "InterviewId": "3698",
        "InterviewEndDate": "2023-07-24",
        "InterviewState": "Complete",
        "Flight": "DK - Sunclass Airlines",
        "Dest": "LCA",
        "AirlineCode": "DK"
    },
    {
        "InterviewId": "3699",
        "InterviewEndDate": "2023-07-24",
        "InterviewState": "Complete",
        "Flight": "DK - Sunclass Airlines",
        "Dest": "LCA",
        "AirlineCode": "DK"
    },
    {
        "InterviewId": "3700",
        "InterviewEndDate": "2023-07-24",
        "InterviewState": "Complete",
        "Flight": "BGH - Balkan Holidays Air",
        "Dest": "LCA",
        "AirlineCode": "BGH"
    },
    {
        "InterviewId": "3701",
        "InterviewEndDate": "2023-07-24",
        "InterviewState": "Complete",
        "Flight": "DK - Sunclass Airlines",
        "Dest": "LCA",
        "AirlineCode": "DK"
    },
    {
        "InterviewId": "3702",
        "InterviewEndDate": "2023-07-24",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "AGP",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "3703",
        "InterviewEndDate": "2023-07-24",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "AGP",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "3705",
        "InterviewEndDate": "2023-07-24",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "AGP",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "3706",
        "InterviewEndDate": "2023-07-24",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "AGP",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "3707",
        "InterviewEndDate": "2023-07-24",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "AGP",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "3709",
        "InterviewEndDate": "2023-07-24",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "AGP",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "3710",
        "InterviewEndDate": "2023-07-24",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "AGP",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "3711",
        "InterviewEndDate": "2023-07-24",
        "InterviewState": "Complete",
        "Flight": "KL - KLM",
        "Dest": "AMS",
        "AirlineCode": "KL"
    },
    {
        "InterviewId": "3712",
        "InterviewEndDate": "2023-07-24",
        "InterviewState": "Complete",
        "Flight": "KL - KLM",
        "Dest": "AMS",
        "AirlineCode": "KL"
    },
    {
        "InterviewId": "3713",
        "InterviewEndDate": "2023-07-24",
        "InterviewState": "Complete",
        "Flight": "KL - KLM",
        "Dest": "AMS",
        "AirlineCode": "KL"
    },
    {
        "InterviewId": "3714",
        "InterviewEndDate": "2023-07-24",
        "InterviewState": "Complete",
        "Flight": "KL - KLM",
        "Dest": "AMS",
        "AirlineCode": "KL"
    },
    {
        "InterviewId": "3716",
        "InterviewEndDate": "2023-07-24",
        "InterviewState": "Complete",
        "Flight": "KL - KLM",
        "Dest": "AMS",
        "AirlineCode": "KL"
    },
    {
        "InterviewId": "3718",
        "InterviewEndDate": "2023-07-24",
        "InterviewState": "Complete",
        "Flight": "KL - KLM",
        "Dest": "AMS",
        "AirlineCode": "KL"
    },
    {
        "InterviewId": "3719",
        "InterviewEndDate": "2023-07-24",
        "InterviewState": "Complete",
        "Flight": "KL - KLM",
        "Dest": "AMS",
        "AirlineCode": "KL"
    },
    {
        "InterviewId": "3722",
        "InterviewEndDate": "2023-07-24",
        "InterviewState": "Complete",
        "Flight": "TK - Turkish Airlines",
        "Dest": "IST",
        "AirlineCode": "TK"
    },
    {
        "InterviewId": "3723",
        "InterviewEndDate": "2023-07-24",
        "InterviewState": "Complete",
        "Flight": "TK - Turkish Airlines",
        "Dest": "IST",
        "AirlineCode": "TK"
    },
    {
        "InterviewId": "3724",
        "InterviewEndDate": "2023-07-24",
        "InterviewState": "Complete",
        "Flight": "TK - Turkish Airlines",
        "Dest": "IST",
        "AirlineCode": "TK"
    },
    {
        "InterviewId": "3725",
        "InterviewEndDate": "2023-07-24",
        "InterviewState": "Complete",
        "Flight": "TK - Turkish Airlines",
        "Dest": "IST",
        "AirlineCode": "TK"
    },
    {
        "InterviewId": "3726",
        "InterviewEndDate": "2023-07-24",
        "InterviewState": "Complete",
        "Flight": "TK - Turkish Airlines",
        "Dest": "IST",
        "AirlineCode": "TK"
    },
    {
        "InterviewId": "3727",
        "InterviewEndDate": "2023-07-24",
        "InterviewState": "Complete",
        "Flight": "TK - Turkish Airlines",
        "Dest": "IST",
        "AirlineCode": "TK"
    },
    {
        "InterviewId": "3728",
        "InterviewEndDate": "2023-07-24",
        "InterviewState": "Complete",
        "Flight": "TK - Turkish Airlines",
        "Dest": "IST",
        "AirlineCode": "TK"
    },
    {
        "InterviewId": "3729",
        "InterviewEndDate": "2023-07-24",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "FRA",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "3730",
        "InterviewEndDate": "2023-07-24",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "FRA",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "3731",
        "InterviewEndDate": "2023-07-24",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "FRA",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "3732",
        "InterviewEndDate": "2023-07-24",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "FRA",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "3733",
        "InterviewEndDate": "2023-07-24",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "FRA",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "3734",
        "InterviewEndDate": "2023-07-24",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "FRA",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "3735",
        "InterviewEndDate": "2023-07-24",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "FRA",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "3736",
        "InterviewEndDate": "2023-07-24",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "FRA",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "3739",
        "InterviewEndDate": "2023-07-31",
        "InterviewState": "Complete",
        "Flight": "LX - Swiss International Air Lines",
        "Dest": "ZRH",
        "AirlineCode": "LX"
    },
    {
        "InterviewId": "3740",
        "InterviewEndDate": "2023-07-31",
        "InterviewState": "Complete",
        "Flight": "LX - Swiss International Air Lines",
        "Dest": "ZRH",
        "AirlineCode": "LX"
    },
    {
        "InterviewId": "3741",
        "InterviewEndDate": "2023-07-31",
        "InterviewState": "Complete",
        "Flight": "LX - Swiss International Air Lines",
        "Dest": "ZRH",
        "AirlineCode": "LX"
    },
    {
        "InterviewId": "3742",
        "InterviewEndDate": "2023-07-31",
        "InterviewState": "Complete",
        "Flight": "LX - Swiss International Air Lines",
        "Dest": "ZRH",
        "AirlineCode": "LX"
    },
    {
        "InterviewId": "3746",
        "InterviewEndDate": "2023-08-14",
        "InterviewState": "Complete",
        "Flight": "JTD - Jettime",
        "Dest": "ZTH",
        "AirlineCode": "JTD"
    },
    {
        "InterviewId": "3747",
        "InterviewEndDate": "2023-08-14",
        "InterviewState": "Complete",
        "Flight": "JTD - Jettime",
        "Dest": "ZTH",
        "AirlineCode": "JTD"
    },
    {
        "InterviewId": "3748",
        "InterviewEndDate": "2023-08-14",
        "InterviewState": "Complete",
        "Flight": "JTD - Jettime",
        "Dest": "ZTH",
        "AirlineCode": "JTD"
    },
    {
        "InterviewId": "3750",
        "InterviewEndDate": "2023-08-14",
        "InterviewState": "Complete",
        "Flight": "JTD - Jettime",
        "Dest": "ZTH",
        "AirlineCode": "JTD"
    },
    {
        "InterviewId": "3751",
        "InterviewEndDate": "2023-08-14",
        "InterviewState": "Complete",
        "Flight": "JTD - Jettime",
        "Dest": "ZTH",
        "AirlineCode": "JTD"
    },
    {
        "InterviewId": "3752",
        "InterviewEndDate": "2023-08-14",
        "InterviewState": "Complete",
        "Flight": "JTD - Jettime",
        "Dest": "ZTH",
        "AirlineCode": "JTD"
    },
    {
        "InterviewId": "3753",
        "InterviewEndDate": "2023-08-14",
        "InterviewState": "Complete",
        "Flight": "JTD - Jettime",
        "Dest": "ZTH",
        "AirlineCode": "JTD"
    },
    {
        "InterviewId": "3755",
        "InterviewEndDate": "2023-08-14",
        "InterviewState": "Complete",
        "Flight": "W6 - Wizz Air",
        "Dest": "OTP",
        "AirlineCode": "W6"
    },
    {
        "InterviewId": "3758",
        "InterviewEndDate": "2023-08-14",
        "InterviewState": "Complete",
        "Flight": "W6 - Wizz Air",
        "Dest": "OTP",
        "AirlineCode": "W6"
    },
    {
        "InterviewId": "3760",
        "InterviewEndDate": "2023-08-14",
        "InterviewState": "Complete",
        "Flight": "W6 - Wizz Air",
        "Dest": "OTP",
        "AirlineCode": "W6"
    },
    {
        "InterviewId": "3764",
        "InterviewEndDate": "2023-08-14",
        "InterviewState": "Complete",
        "Flight": "SK - Scandinavian Airlines System (SAS)",
        "Dest": "ARN",
        "AirlineCode": "SK"
    },
    {
        "InterviewId": "3765",
        "InterviewEndDate": "2023-08-14",
        "InterviewState": "Complete",
        "Flight": "SK - Scandinavian Airlines System (SAS)",
        "Dest": "ARN",
        "AirlineCode": "SK"
    },
    {
        "InterviewId": "3766",
        "InterviewEndDate": "2023-08-14",
        "InterviewState": "Complete",
        "Flight": "SK - Scandinavian Airlines System (SAS)",
        "Dest": "ARN",
        "AirlineCode": "SK"
    },
    {
        "InterviewId": "3767",
        "InterviewEndDate": "2023-08-14",
        "InterviewState": "Complete",
        "Flight": "SN - Brussels Airlines",
        "Dest": "BRU",
        "AirlineCode": "SN"
    },
    {
        "InterviewId": "3769",
        "InterviewEndDate": "2023-08-14",
        "InterviewState": "Complete",
        "Flight": "SN - Brussels Airlines",
        "Dest": "BRU",
        "AirlineCode": "SN"
    },
    {
        "InterviewId": "3770",
        "InterviewEndDate": "2023-08-14",
        "InterviewState": "Complete",
        "Flight": "SN - Brussels Airlines",
        "Dest": "BRU",
        "AirlineCode": "SN"
    },
    {
        "InterviewId": "3771",
        "InterviewEndDate": "2023-08-14",
        "InterviewState": "Complete",
        "Flight": "SN - Brussels Airlines",
        "Dest": "CRL",
        "AirlineCode": "SN"
    },
    {
        "InterviewId": "3772",
        "InterviewEndDate": "2023-08-14",
        "InterviewState": "Complete",
        "Flight": "SN - Brussels Airlines",
        "Dest": "BRU",
        "AirlineCode": "SN"
    },
    {
        "InterviewId": "3773",
        "InterviewEndDate": "2023-08-14",
        "InterviewState": "Complete",
        "Flight": "SN - Brussels Airlines",
        "Dest": "BRU",
        "AirlineCode": "SN"
    },
    {
        "InterviewId": "3774",
        "InterviewEndDate": "2023-08-14",
        "InterviewState": "Complete",
        "Flight": "SN - Brussels Airlines",
        "Dest": "BRU",
        "AirlineCode": "SN"
    },
    {
        "InterviewId": "3775",
        "InterviewEndDate": "2023-08-14",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "AGP",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "3776",
        "InterviewEndDate": "2023-08-14",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "AGP",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "3777",
        "InterviewEndDate": "2023-08-14",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "AGP",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "3778",
        "InterviewEndDate": "2023-08-14",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "AGP",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "3779",
        "InterviewEndDate": "2023-08-14",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "AGP",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "3780",
        "InterviewEndDate": "2023-08-14",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "AGP",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "3783",
        "InterviewEndDate": "2023-08-17",
        "InterviewState": "Complete",
        "Flight": "JTD - Jettime",
        "Dest": "CHQ",
        "AirlineCode": "JTD"
    },
    {
        "InterviewId": "3784",
        "InterviewEndDate": "2023-08-17",
        "InterviewState": "Complete",
        "Flight": "JTD - Jettime",
        "Dest": "CHQ",
        "AirlineCode": "JTD"
    },
    {
        "InterviewId": "3785",
        "InterviewEndDate": "2023-08-17",
        "InterviewState": "Complete",
        "Flight": "JTD - Jettime",
        "Dest": "CHQ",
        "AirlineCode": "JTD"
    },
    {
        "InterviewId": "3786",
        "InterviewEndDate": "2023-08-17",
        "InterviewState": "Complete",
        "Flight": "JTD - Jettime",
        "Dest": "CHQ",
        "AirlineCode": "JTD"
    },
    {
        "InterviewId": "3792",
        "InterviewEndDate": "2023-08-17",
        "InterviewState": "Complete",
        "Flight": "SK - Scandinavian Airlines System (SAS)",
        "Dest": "OSL",
        "AirlineCode": "SK"
    },
    {
        "InterviewId": "3794",
        "InterviewEndDate": "2023-08-17",
        "InterviewState": "Complete",
        "Flight": "SK - Scandinavian Airlines System (SAS)",
        "Dest": "OSL",
        "AirlineCode": "SK"
    },
    {
        "InterviewId": "3798",
        "InterviewEndDate": "2023-08-17",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "TRN",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "3799",
        "InterviewEndDate": "2023-08-17",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "TRN",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "3800",
        "InterviewEndDate": "2023-08-17",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "TRN",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "3801",
        "InterviewEndDate": "2023-08-17",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "TRN",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "3803",
        "InterviewEndDate": "2023-08-17",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "TRN",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "3810",
        "InterviewEndDate": "2023-08-19",
        "InterviewState": "Complete",
        "Flight": "XR - Corendon Airline",
        "Dest": "HER",
        "AirlineCode": "XR"
    },
    {
        "InterviewId": "3811",
        "InterviewEndDate": "2023-08-19",
        "InterviewState": "Complete",
        "Flight": "XR - Corendon Airline",
        "Dest": "HER",
        "AirlineCode": "XR"
    },
    {
        "InterviewId": "3812",
        "InterviewEndDate": "2023-08-19",
        "InterviewState": "Complete",
        "Flight": "XR - Corendon Airline",
        "Dest": "HER",
        "AirlineCode": "XR"
    },
    {
        "InterviewId": "3813",
        "InterviewEndDate": "2023-08-19",
        "InterviewState": "Complete",
        "Flight": "XR - Corendon Airline",
        "Dest": "HER",
        "AirlineCode": "XR"
    },
    {
        "InterviewId": "3816",
        "InterviewEndDate": "2023-08-19",
        "InterviewState": "Complete",
        "Flight": "XR - Corendon Airline",
        "Dest": "HER",
        "AirlineCode": "XR"
    },
    {
        "InterviewId": "3818",
        "InterviewEndDate": "2023-08-19",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "VIE",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "3819",
        "InterviewEndDate": "2023-08-19",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "BUD",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "3820",
        "InterviewEndDate": "2023-08-19",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "BUD",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "3827",
        "InterviewEndDate": "2023-08-19",
        "InterviewState": "Complete",
        "Flight": "RC - Atlantic Airways",
        "Dest": "SMI",
        "AirlineCode": "RC"
    },
    {
        "InterviewId": "3828",
        "InterviewEndDate": "2023-08-19",
        "InterviewState": "Complete",
        "Flight": "RC - Atlantic Airways",
        "Dest": "SMI",
        "AirlineCode": "RC"
    },
    {
        "InterviewId": "3829",
        "InterviewEndDate": "2023-08-19",
        "InterviewState": "Complete",
        "Flight": "RC - Atlantic Airways",
        "Dest": "SMI",
        "AirlineCode": "RC"
    },
    {
        "InterviewId": "3830",
        "InterviewEndDate": "2023-08-20",
        "InterviewState": "Complete",
        "Flight": "JTD - Jettime",
        "Dest": "AGP",
        "AirlineCode": "JTD"
    },
    {
        "InterviewId": "3831",
        "InterviewEndDate": "2023-08-20",
        "InterviewState": "Complete",
        "Flight": "JTD - Jettime",
        "Dest": "AGP",
        "AirlineCode": "JTD"
    },
    {
        "InterviewId": "3832",
        "InterviewEndDate": "2023-08-20",
        "InterviewState": "Complete",
        "Flight": "JTD - Jettime",
        "Dest": "AGP",
        "AirlineCode": "JTD"
    },
    {
        "InterviewId": "3833",
        "InterviewEndDate": "2023-08-20",
        "InterviewState": "Complete",
        "Flight": "JTD - Jettime",
        "Dest": "AGP",
        "AirlineCode": "JTD"
    },
    {
        "InterviewId": "3834",
        "InterviewEndDate": "2023-08-20",
        "InterviewState": "Complete",
        "Flight": "JTD - Jettime",
        "Dest": "AGP",
        "AirlineCode": "JTD"
    },
    {
        "InterviewId": "3835",
        "InterviewEndDate": "2023-08-20",
        "InterviewState": "Complete",
        "Flight": "DY - Norwegian Air Schuttle",
        "Dest": "OSL",
        "AirlineCode": "DY"
    },
    {
        "InterviewId": "3836",
        "InterviewEndDate": "2023-08-20",
        "InterviewState": "Complete",
        "Flight": "DY - Norwegian Air Schuttle",
        "Dest": "OSL",
        "AirlineCode": "DY"
    },
    {
        "InterviewId": "3839",
        "InterviewEndDate": "2023-08-20",
        "InterviewState": "Complete",
        "Flight": "DY - Norwegian Air Schuttle",
        "Dest": "OSL",
        "AirlineCode": "DY"
    },
    {
        "InterviewId": "3842",
        "InterviewEndDate": "2023-08-20",
        "InterviewState": "Complete",
        "Flight": "SN - Brussels Airlines",
        "Dest": "BRU",
        "AirlineCode": "SN"
    },
    {
        "InterviewId": "3843",
        "InterviewEndDate": "2023-08-20",
        "InterviewState": "Complete",
        "Flight": "SN - Brussels Airlines",
        "Dest": "BRU",
        "AirlineCode": "SN"
    },
    {
        "InterviewId": "3850",
        "InterviewEndDate": "2023-08-20",
        "InterviewState": "Complete",
        "Flight": "RC - Atlantic Airways",
        "Dest": "AOK",
        "AirlineCode": "RC"
    },
    {
        "InterviewId": "3851",
        "InterviewEndDate": "2023-08-20",
        "InterviewState": "Complete",
        "Flight": "RC - Atlantic Airways",
        "Dest": "AOK",
        "AirlineCode": "RC"
    },
    {
        "InterviewId": "3860",
        "InterviewEndDate": "2023-08-23",
        "InterviewState": "Complete",
        "Flight": "AF - AIR FRANCE",
        "Dest": "CDG",
        "AirlineCode": "AF"
    },
    {
        "InterviewId": "3864",
        "InterviewEndDate": "2023-08-23",
        "InterviewState": "Complete",
        "Flight": "AF - AIR FRANCE",
        "Dest": "CDG",
        "AirlineCode": "AF"
    },
    {
        "InterviewId": "3865",
        "InterviewEndDate": "2023-08-23",
        "InterviewState": "Complete",
        "Flight": "LO - LOT",
        "Dest": "WAW",
        "AirlineCode": "LO"
    },
    {
        "InterviewId": "3866",
        "InterviewEndDate": "2023-08-23",
        "InterviewState": "Complete",
        "Flight": "LO - LOT",
        "Dest": "WAW",
        "AirlineCode": "LO"
    },
    {
        "InterviewId": "3867",
        "InterviewEndDate": "2023-08-24",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "MUC",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "3868",
        "InterviewEndDate": "2023-08-24",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "MUC",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "3873",
        "InterviewEndDate": "2023-08-24",
        "InterviewState": "Complete",
        "Flight": "KL - KLM",
        "Dest": "AMS",
        "AirlineCode": "KL"
    },
    {
        "InterviewId": "3874",
        "InterviewEndDate": "2023-08-24",
        "InterviewState": "Complete",
        "Flight": "KL - KLM",
        "Dest": "AMS",
        "AirlineCode": "KL"
    },
    {
        "InterviewId": "3875",
        "InterviewEndDate": "2023-08-24",
        "InterviewState": "Complete",
        "Flight": "KL - KLM",
        "Dest": "AMS",
        "AirlineCode": "KL"
    },
    {
        "InterviewId": "3876",
        "InterviewEndDate": "2023-08-24",
        "InterviewState": "Complete",
        "Flight": "KL - KLM",
        "Dest": "AMS",
        "AirlineCode": "KL"
    },
    {
        "InterviewId": "3877",
        "InterviewEndDate": "2023-08-24",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "MUC",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "3881",
        "InterviewEndDate": "2023-08-24",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "KRK",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "3886",
        "InterviewEndDate": "2023-08-24",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "KRK",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "3887",
        "InterviewEndDate": "2023-08-24",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "KRK",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "3892",
        "InterviewEndDate": "2023-08-24",
        "InterviewState": "Complete",
        "Flight": "BT - Air Baltic",
        "Dest": "RIX",
        "AirlineCode": "BT"
    },
    {
        "InterviewId": "3893",
        "InterviewEndDate": "2023-08-24",
        "InterviewState": "Complete",
        "Flight": "BT - Air Baltic",
        "Dest": "RIX",
        "AirlineCode": "BT"
    },
    {
        "InterviewId": "3894",
        "InterviewEndDate": "2023-08-24",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "STN",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "3895",
        "InterviewEndDate": "2023-08-24",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "STN",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "3897",
        "InterviewEndDate": "2023-08-24",
        "InterviewState": "Complete",
        "Flight": "SK - Scandinavian Airlines System (SAS)",
        "Dest": "OSL",
        "AirlineCode": "SK"
    },
    {
        "InterviewId": "3903",
        "InterviewEndDate": "2023-08-24",
        "InterviewState": "Complete",
        "Flight": "KL - KLM",
        "Dest": "AMS",
        "AirlineCode": "KL"
    },
    {
        "InterviewId": "3904",
        "InterviewEndDate": "2023-08-24",
        "InterviewState": "Complete",
        "Flight": "KL - KLM",
        "Dest": "AMS",
        "AirlineCode": "KL"
    },
    {
        "InterviewId": "3905",
        "InterviewEndDate": "2023-08-24",
        "InterviewState": "Complete",
        "Flight": "KL - KLM",
        "Dest": "AMS",
        "AirlineCode": "KL"
    },
    {
        "InterviewId": "3906",
        "InterviewEndDate": "2023-08-24",
        "InterviewState": "Complete",
        "Flight": "KL - KLM",
        "Dest": "AMS",
        "AirlineCode": "KL"
    },
    {
        "InterviewId": "3910",
        "InterviewEndDate": "2023-08-24",
        "InterviewState": "Complete",
        "Flight": "CAT - Global Reach Aviation",
        "Dest": "SSH",
        "AirlineCode": "CAT"
    },
    {
        "InterviewId": "3914",
        "InterviewEndDate": "2023-08-24",
        "InterviewState": "Complete",
        "Flight": "CAT - Global Reach Aviation",
        "Dest": "SSH",
        "AirlineCode": "CAT"
    },
    {
        "InterviewId": "3921",
        "InterviewEndDate": "2023-08-24",
        "InterviewState": "Complete",
        "Flight": "PC - Pegasus Hava Tasimaciligi",
        "Dest": "AYT",
        "AirlineCode": "PC"
    },
    {
        "InterviewId": "3922",
        "InterviewEndDate": "2023-08-24",
        "InterviewState": "Complete",
        "Flight": "PC - Pegasus Hava Tasimaciligi",
        "Dest": "AYT",
        "AirlineCode": "PC"
    },
    {
        "InterviewId": "3926",
        "InterviewEndDate": "2023-08-24",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "VIE",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "3928",
        "InterviewEndDate": "2023-08-24",
        "InterviewState": "Complete",
        "Flight": "SK - Scandinavian Airlines System (SAS)",
        "Dest": "OSL",
        "AirlineCode": "SK"
    },
    {
        "InterviewId": "3929",
        "InterviewEndDate": "2023-08-24",
        "InterviewState": "Complete",
        "Flight": "SK - Scandinavian Airlines System (SAS)",
        "Dest": "OSL",
        "AirlineCode": "SK"
    },
    {
        "InterviewId": "3932",
        "InterviewEndDate": "2023-08-24",
        "InterviewState": "Complete",
        "Flight": "Braaethens",
        "Dest": "TFS",
        "AirlineCode": "Braaethens"
    },
    {
        "InterviewId": "3933",
        "InterviewEndDate": "2023-08-24",
        "InterviewState": "Complete",
        "Flight": "Braaethens",
        "Dest": "TFS",
        "AirlineCode": "Braaethens"
    },
    {
        "InterviewId": "3941",
        "InterviewEndDate": "2023-08-26",
        "InterviewState": "Complete",
        "Flight": "KL - KLM",
        "Dest": "AMS",
        "AirlineCode": "KL"
    },
    {
        "InterviewId": "3944",
        "InterviewEndDate": "2023-08-26",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "FRA",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "3945",
        "InterviewEndDate": "2023-08-26",
        "InterviewState": "Complete",
        "Flight": "Lh",
        "Dest": "FRA",
        "AirlineCode": "Lh"
    },
    {
        "InterviewId": "3947",
        "InterviewEndDate": "2023-08-26",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "FRA",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "3948",
        "InterviewEndDate": "2023-08-26",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "FRA",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "3949",
        "InterviewEndDate": "2023-08-26",
        "InterviewState": "Complete",
        "Flight": "KL - KLM",
        "Dest": "AMS",
        "AirlineCode": "KL"
    },
    {
        "InterviewId": "3950",
        "InterviewEndDate": "2023-08-26",
        "InterviewState": "Complete",
        "Flight": "VY - Vueling Airlines",
        "Dest": "PMI",
        "AirlineCode": "VY"
    },
    {
        "InterviewId": "3951",
        "InterviewEndDate": "2023-08-26",
        "InterviewState": "Complete",
        "Flight": "VY - Vueling Airlines",
        "Dest": "PMI",
        "AirlineCode": "VY"
    },
    {
        "InterviewId": "3952",
        "InterviewEndDate": "2023-08-26",
        "InterviewState": "Complete",
        "Flight": "VY - Vueling Airlines",
        "Dest": "PMI",
        "AirlineCode": "VY"
    },
    {
        "InterviewId": "3960",
        "InterviewEndDate": "2023-08-29",
        "InterviewState": "Complete",
        "Flight": "SK - Scandinavian Airlines System (SAS)",
        "Dest": "OSL",
        "AirlineCode": "SK"
    },
    {
        "InterviewId": "3961",
        "InterviewEndDate": "2023-08-29",
        "InterviewState": "Complete",
        "Flight": "SK - Scandinavian Airlines System (SAS)",
        "Dest": "OSL",
        "AirlineCode": "SK"
    },
    {
        "InterviewId": "3963",
        "InterviewEndDate": "2023-08-29",
        "InterviewState": "Complete",
        "Flight": "SK - Scandinavian Airlines System (SAS)",
        "Dest": "OSL",
        "AirlineCode": "SK"
    },
    {
        "InterviewId": "3966",
        "InterviewEndDate": "2023-08-29",
        "InterviewState": "Complete",
        "Flight": "XQ - G\u00fcnes Ekspres Havacilik (SunExpress)",
        "Dest": "AYT",
        "AirlineCode": "XQ"
    },
    {
        "InterviewId": "3968",
        "InterviewEndDate": "2023-08-29",
        "InterviewState": "Complete",
        "Flight": "XQ - G\u00fcnes Ekspres Havacilik (SunExpress)",
        "Dest": "AYT",
        "AirlineCode": "XQ"
    },
    {
        "InterviewId": "3969",
        "InterviewEndDate": "2023-08-29",
        "InterviewState": "Complete",
        "Flight": "XQ - G\u00fcnes Ekspres Havacilik (SunExpress)",
        "Dest": "AYT",
        "AirlineCode": "XQ"
    },
    {
        "InterviewId": "3970",
        "InterviewEndDate": "2023-08-29",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "BUD",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "3971",
        "InterviewEndDate": "2023-08-29",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "BUD",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "3972",
        "InterviewEndDate": "2023-08-29",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "BUD",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "3973",
        "InterviewEndDate": "2023-08-29",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "BUD",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "3974",
        "InterviewEndDate": "2023-08-29",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "BUD",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "3978",
        "InterviewEndDate": "2023-08-29",
        "InterviewState": "Complete",
        "Flight": "KL - KLM",
        "Dest": "AMS",
        "AirlineCode": "KL"
    },
    {
        "InterviewId": "3982",
        "InterviewEndDate": "2023-08-29",
        "InterviewState": "Complete",
        "Flight": "KL - KLM",
        "Dest": "AMS",
        "AirlineCode": "KL"
    },
    {
        "InterviewId": "3984",
        "InterviewEndDate": "2023-08-29",
        "InterviewState": "Complete",
        "Flight": "SK - Scandinavian Airlines System (SAS)",
        "Dest": "ARN",
        "AirlineCode": "SK"
    },
    {
        "InterviewId": "3985",
        "InterviewEndDate": "2023-08-29",
        "InterviewState": "Complete",
        "Flight": "SK - Scandinavian Airlines System (SAS)",
        "Dest": "ARN",
        "AirlineCode": "SK"
    },
    {
        "InterviewId": "3992",
        "InterviewEndDate": "2023-08-29",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "FRA",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "3993",
        "InterviewEndDate": "2023-08-29",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "OPO",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "3994",
        "InterviewEndDate": "2023-08-29",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "OPO",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "3996",
        "InterviewEndDate": "2023-08-29",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "VNO",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "4001",
        "InterviewEndDate": "2023-08-29",
        "InterviewState": "Complete",
        "Flight": "AF - AIR FRANCE",
        "Dest": "CDG",
        "AirlineCode": "AF"
    },
    {
        "InterviewId": "4002",
        "InterviewEndDate": "2023-08-29",
        "InterviewState": "Complete",
        "Flight": "AF - AIR FRANCE",
        "Dest": "CDG",
        "AirlineCode": "AF"
    },
    {
        "InterviewId": "4003",
        "InterviewEndDate": "2023-08-29",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "VNO",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "4006",
        "InterviewEndDate": "2023-08-29",
        "InterviewState": "Complete",
        "Flight": "AF - AIR FRANCE",
        "Dest": "CDG",
        "AirlineCode": "AF"
    },
    {
        "InterviewId": "4014",
        "InterviewEndDate": "2023-08-29",
        "InterviewState": "Complete",
        "Flight": "AF - AIR FRANCE",
        "Dest": "CDG",
        "AirlineCode": "AF"
    },
    {
        "InterviewId": "4020",
        "InterviewEndDate": "2023-08-29",
        "InterviewState": "Complete",
        "Flight": "KL - KLM",
        "Dest": "AMS",
        "AirlineCode": "KL"
    },
    {
        "InterviewId": "4021",
        "InterviewEndDate": "2023-08-29",
        "InterviewState": "Complete",
        "Flight": "KL - KLM",
        "Dest": "AMS",
        "AirlineCode": "KL"
    },
    {
        "InterviewId": "4028",
        "InterviewEndDate": "2023-08-29",
        "InterviewState": "Complete",
        "Flight": "VY - Vueling Airlines",
        "Dest": "AGP",
        "AirlineCode": "VY"
    },
    {
        "InterviewId": "4029",
        "InterviewEndDate": "2023-08-29",
        "InterviewState": "Complete",
        "Flight": "VY - Vueling Airlines",
        "Dest": "AGP",
        "AirlineCode": "VY"
    },
    {
        "InterviewId": "4034",
        "InterviewEndDate": "2023-08-29",
        "InterviewState": "Complete",
        "Flight": "JTD - Jettime",
        "Dest": "PMI",
        "AirlineCode": "JTD"
    },
    {
        "InterviewId": "4035",
        "InterviewEndDate": "2023-08-29",
        "InterviewState": "Complete",
        "Flight": "JTD - Jettime",
        "Dest": "PMI",
        "AirlineCode": "JTD"
    },
    {
        "InterviewId": "4040",
        "InterviewEndDate": "2023-08-29",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "GDN",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "4041",
        "InterviewEndDate": "2023-08-29",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "GDN",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "4043",
        "InterviewEndDate": "2023-08-29",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "GDN",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "4044",
        "InterviewEndDate": "2023-09-01",
        "InterviewState": "Complete",
        "Flight": "KL - KLM",
        "Dest": "AMS",
        "AirlineCode": "KL"
    },
    {
        "InterviewId": "4047",
        "InterviewEndDate": "2023-09-01",
        "InterviewState": "Complete",
        "Flight": "KL - KLM",
        "Dest": "AMS",
        "AirlineCode": "KL"
    },
    {
        "InterviewId": "4048",
        "InterviewEndDate": "2023-09-01",
        "InterviewState": "Complete",
        "Flight": "KL - KLM",
        "Dest": "AMS",
        "AirlineCode": "KL"
    },
    {
        "InterviewId": "4049",
        "InterviewEndDate": "2023-09-01",
        "InterviewState": "Complete",
        "Flight": "KL - KLM",
        "Dest": "AMS",
        "AirlineCode": "KL"
    },
    {
        "InterviewId": "4050",
        "InterviewEndDate": "2023-09-01",
        "InterviewState": "Complete",
        "Flight": "KL - KLM",
        "Dest": "AMS",
        "AirlineCode": "KL"
    },
    {
        "InterviewId": "4052",
        "InterviewEndDate": "2023-09-01",
        "InterviewState": "Complete",
        "Flight": "KL - KLM",
        "Dest": "AMS",
        "AirlineCode": "KL"
    },
    {
        "InterviewId": "4053",
        "InterviewEndDate": "2023-09-01",
        "InterviewState": "Complete",
        "Flight": "SN - Brussels Airlines",
        "Dest": "BRU",
        "AirlineCode": "SN"
    },
    {
        "InterviewId": "4055",
        "InterviewEndDate": "2023-09-01",
        "InterviewState": "Complete",
        "Flight": "SN - Brussels Airlines",
        "Dest": "BRU",
        "AirlineCode": "SN"
    },
    {
        "InterviewId": "4061",
        "InterviewEndDate": "2023-09-01",
        "InterviewState": "Complete",
        "Flight": "TK - Turkish Airlines",
        "Dest": "IST",
        "AirlineCode": "TK"
    },
    {
        "InterviewId": "4062",
        "InterviewEndDate": "2023-09-01",
        "InterviewState": "Complete",
        "Flight": "TK - Turkish Airlines",
        "Dest": "IST",
        "AirlineCode": "TK"
    },
    {
        "InterviewId": "4063",
        "InterviewEndDate": "2023-09-01",
        "InterviewState": "Complete",
        "Flight": "SN - Brussels Airlines",
        "Dest": "BRU",
        "AirlineCode": "SN"
    },
    {
        "InterviewId": "4064",
        "InterviewEndDate": "2023-09-01",
        "InterviewState": "Complete",
        "Flight": "LO - LOT",
        "Dest": "WAW",
        "AirlineCode": "LO"
    },
    {
        "InterviewId": "4068",
        "InterviewEndDate": "2023-09-01",
        "InterviewState": "Complete",
        "Flight": "LO - LOT",
        "Dest": "WAW",
        "AirlineCode": "LO"
    },
    {
        "InterviewId": "4070",
        "InterviewEndDate": "2023-09-01",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "FRA",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "4071",
        "InterviewEndDate": "2023-09-01",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "FRA",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "4073",
        "InterviewEndDate": "2023-09-01",
        "InterviewState": "Complete",
        "Flight": "JTD - Jettime",
        "Dest": "ACE",
        "AirlineCode": "JTD"
    },
    {
        "InterviewId": "4077",
        "InterviewEndDate": "2023-09-01",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "PMI",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "4078",
        "InterviewEndDate": "2023-09-01",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "PMI",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "4080",
        "InterviewEndDate": "2023-09-01",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "PMI",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "4086",
        "InterviewEndDate": "2023-09-01",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "IBZ",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "4087",
        "InterviewEndDate": "2023-09-01",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "IBZ",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "4092",
        "InterviewEndDate": "2023-09-01",
        "InterviewState": "Complete",
        "Flight": "W6 - Wizz Air",
        "Dest": "OTP",
        "AirlineCode": "W6"
    },
    {
        "InterviewId": "4096",
        "InterviewEndDate": "2023-09-01",
        "InterviewState": "Complete",
        "Flight": "W6 - Wizz Air",
        "Dest": "OTP",
        "AirlineCode": "W6"
    },
    {
        "InterviewId": "4106",
        "InterviewEndDate": "2023-09-03",
        "InterviewState": "Complete",
        "Flight": "KL - KLM",
        "Dest": "AMS",
        "AirlineCode": "KL"
    },
    {
        "InterviewId": "4107",
        "InterviewEndDate": "2023-09-03",
        "InterviewState": "Complete",
        "Flight": "KL - KLM",
        "Dest": "AMS",
        "AirlineCode": "KL"
    },
    {
        "InterviewId": "4112",
        "InterviewEndDate": "2023-09-03",
        "InterviewState": "Complete",
        "Flight": "CAT - Global Reach Aviation",
        "Dest": "CHQ",
        "AirlineCode": "CAT"
    },
    {
        "InterviewId": "4114",
        "InterviewEndDate": "2023-09-03",
        "InterviewState": "Complete",
        "Flight": "CAT - Global Reach Aviation",
        "Dest": "CHQ",
        "AirlineCode": "CAT"
    },
    {
        "InterviewId": "4115",
        "InterviewEndDate": "2023-09-03",
        "InterviewState": "Complete",
        "Flight": "CAT - Global Reach Aviation",
        "Dest": "CHQ",
        "AirlineCode": "CAT"
    },
    {
        "InterviewId": "4116",
        "InterviewEndDate": "2023-09-03",
        "InterviewState": "Complete",
        "Flight": "CAT - Global Reach Aviation",
        "Dest": "CHQ",
        "AirlineCode": "CAT"
    },
    {
        "InterviewId": "4117",
        "InterviewEndDate": "2023-09-03",
        "InterviewState": "Complete",
        "Flight": "CAT - Global Reach Aviation",
        "Dest": "CHQ",
        "AirlineCode": "CAT"
    },
    {
        "InterviewId": "4118",
        "InterviewEndDate": "2023-09-03",
        "InterviewState": "Complete",
        "Flight": "DX - DAT",
        "Dest": "RNN",
        "AirlineCode": "DX"
    },
    {
        "InterviewId": "4119",
        "InterviewEndDate": "2023-09-03",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "FRA",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "4120",
        "InterviewEndDate": "2023-09-03",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "VNO",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "4121",
        "InterviewEndDate": "2023-09-03",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "VNO",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "4133",
        "InterviewEndDate": "2023-09-20",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "BCN",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "4135",
        "InterviewEndDate": "2023-09-20",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "BCN",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "4136",
        "InterviewEndDate": "2023-09-21",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "POZ",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "4158",
        "InterviewEndDate": "2023-09-26",
        "InterviewState": "Complete",
        "Flight": "RC - Atlantic Airways",
        "Dest": "FUE",
        "AirlineCode": "RC"
    },
    {
        "InterviewId": "4159",
        "InterviewEndDate": "2023-09-26",
        "InterviewState": "Complete",
        "Flight": "FI - Icelandair",
        "Dest": "FUE",
        "AirlineCode": "FI"
    },
    {
        "InterviewId": "4160",
        "InterviewEndDate": "2023-09-26",
        "InterviewState": "Complete",
        "Flight": "RC - Atlantic Airways",
        "Dest": "FUE",
        "AirlineCode": "RC"
    },
    {
        "InterviewId": "4171",
        "InterviewEndDate": "2023-09-27",
        "InterviewState": "Complete",
        "Flight": "SK - Scandinavian Airlines System (SAS)",
        "Dest": "OSL",
        "AirlineCode": "SK"
    },
    {
        "InterviewId": "4172",
        "InterviewEndDate": "2023-09-27",
        "InterviewState": "Complete",
        "Flight": "Sas",
        "Dest": "OSL",
        "AirlineCode": "Sas"
    },
    {
        "InterviewId": "4174",
        "InterviewEndDate": "2023-09-27",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "PSA",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "4175",
        "InterviewEndDate": "2023-09-27",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "PSA",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "4176",
        "InterviewEndDate": "2023-09-27",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "PSA",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "4177",
        "InterviewEndDate": "2023-09-27",
        "InterviewState": "Complete",
        "Flight": "SK - Scandinavian Airlines System (SAS)",
        "Dest": "OSL",
        "AirlineCode": "SK"
    },
    {
        "InterviewId": "4178",
        "InterviewEndDate": "2023-09-27",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "PSA",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "4179",
        "InterviewEndDate": "2023-09-27",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "PSA",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "4180",
        "InterviewEndDate": "2023-09-27",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "PSA",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "4183",
        "InterviewEndDate": "2023-09-27",
        "InterviewState": "Complete",
        "Flight": "Sunexpress",
        "Dest": "AYT",
        "AirlineCode": "Sunexpress"
    },
    {
        "InterviewId": "4185",
        "InterviewEndDate": "2023-09-27",
        "InterviewState": "Complete",
        "Flight": "SunEkspres",
        "Dest": "AYT",
        "AirlineCode": "SunEkspres"
    },
    {
        "InterviewId": "4186",
        "InterviewEndDate": "2023-09-27",
        "InterviewState": "Complete",
        "Flight": "Sunexpres",
        "Dest": "AYT",
        "AirlineCode": "Sunexpres"
    },
    {
        "InterviewId": "4189",
        "InterviewEndDate": "2023-09-27",
        "InterviewState": "Complete",
        "Flight": "GQ - Sky Express",
        "Dest": "HER",
        "AirlineCode": "GQ"
    },
    {
        "InterviewId": "4190",
        "InterviewEndDate": "2023-09-27",
        "InterviewState": "Complete",
        "Flight": "Sunexpress",
        "Dest": "ALC",
        "AirlineCode": "Sunexpress"
    },
    {
        "InterviewId": "4191",
        "InterviewEndDate": "2023-09-27",
        "InterviewState": "Complete",
        "Flight": "Sun express",
        "Dest": "AYT",
        "AirlineCode": "Sun"
    },
    {
        "InterviewId": "4192",
        "InterviewEndDate": "2023-09-27",
        "InterviewState": "Complete",
        "Flight": "XQ - G\u00fcnes Ekspres Havacilik (SunExpress)",
        "Dest": "AYT",
        "AirlineCode": "XQ"
    },
    {
        "InterviewId": "4194",
        "InterviewEndDate": "2023-09-27",
        "InterviewState": "Complete",
        "Flight": "Delta",
        "Dest": "AMS",
        "AirlineCode": "Delta"
    },
    {
        "InterviewId": "4195",
        "InterviewEndDate": "2023-09-27",
        "InterviewState": "Complete",
        "Flight": "Klm",
        "Dest": "AMS",
        "AirlineCode": "Klm"
    },
    {
        "InterviewId": "4197",
        "InterviewEndDate": "2023-09-27",
        "InterviewState": "Complete",
        "Flight": "Flyexpress",
        "Dest": "HER",
        "AirlineCode": "Flyexpress"
    },
    {
        "InterviewId": "4198",
        "InterviewEndDate": "2023-09-27",
        "InterviewState": "Complete",
        "Flight": "GQ - Sky Express",
        "Dest": "HER",
        "AirlineCode": "GQ"
    },
    {
        "InterviewId": "4199",
        "InterviewEndDate": "2023-09-27",
        "InterviewState": "Complete",
        "Flight": "Skyekspress",
        "Dest": "HER",
        "AirlineCode": "Skyekspress"
    },
    {
        "InterviewId": "4200",
        "InterviewEndDate": "2023-09-27",
        "InterviewState": "Complete",
        "Flight": "Delta",
        "Dest": "AMS",
        "AirlineCode": "Delta"
    },
    {
        "InterviewId": "4201",
        "InterviewEndDate": "2023-09-27",
        "InterviewState": "Complete",
        "Flight": "GQ - Sky Express",
        "Dest": "HER",
        "AirlineCode": "GQ"
    },
    {
        "InterviewId": "4202",
        "InterviewEndDate": "2023-09-27",
        "InterviewState": "Complete",
        "Flight": "Sas",
        "Dest": "ARN",
        "AirlineCode": "Sas"
    },
    {
        "InterviewId": "4203",
        "InterviewEndDate": "2023-09-27",
        "InterviewState": "Complete",
        "Flight": "SK - Scandinavian Airlines System (SAS)",
        "Dest": "ARN",
        "AirlineCode": "SK"
    },
    {
        "InterviewId": "4204",
        "InterviewEndDate": "2023-09-27",
        "InterviewState": "Complete",
        "Flight": "SK - Scandinavian Airlines System (SAS)",
        "Dest": "ARN",
        "AirlineCode": "SK"
    },
    {
        "InterviewId": "4206",
        "InterviewEndDate": "2023-09-27",
        "InterviewState": "Complete",
        "Flight": "Sas",
        "Dest": "ARN",
        "AirlineCode": "Sas"
    },
    {
        "InterviewId": "4207",
        "InterviewEndDate": "2023-09-27",
        "InterviewState": "Complete",
        "Flight": "Sas",
        "Dest": "ARN",
        "AirlineCode": "Sas"
    },
    {
        "InterviewId": "4208",
        "InterviewEndDate": "2023-09-27",
        "InterviewState": "Complete",
        "Flight": "SK - Scandinavian Airlines System (SAS)",
        "Dest": "ARN",
        "AirlineCode": "SK"
    },
    {
        "InterviewId": "4209",
        "InterviewEndDate": "2023-09-27",
        "InterviewState": "Complete",
        "Flight": "Ryanair",
        "Dest": "DUB",
        "AirlineCode": "Ryanair"
    },
    {
        "InterviewId": "4211",
        "InterviewEndDate": "2023-09-27",
        "InterviewState": "Complete",
        "Flight": "Ryanair",
        "Dest": "DUB",
        "AirlineCode": "Ryanair"
    },
    {
        "InterviewId": "4212",
        "InterviewEndDate": "2023-09-27",
        "InterviewState": "Complete",
        "Flight": "Ryaair",
        "Dest": "DUB",
        "AirlineCode": "Ryaair"
    },
    {
        "InterviewId": "4213",
        "InterviewEndDate": "2023-09-27",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "DUB",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "4214",
        "InterviewEndDate": "2023-09-27",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "DUB",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "4219",
        "InterviewEndDate": "2023-09-27",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "BJV",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "4221",
        "InterviewEndDate": "2023-09-27",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "BJV",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "4222",
        "InterviewEndDate": "2023-09-27",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "BJV",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "4224",
        "InterviewEndDate": "2023-09-27",
        "InterviewState": "Complete",
        "Flight": "KL - KLM",
        "Dest": "AMS",
        "AirlineCode": "KL"
    },
    {
        "InterviewId": "4225",
        "InterviewEndDate": "2023-09-27",
        "InterviewState": "Complete",
        "Flight": "KL - KLM",
        "Dest": "AMS",
        "AirlineCode": "KL"
    },
    {
        "InterviewId": "4226",
        "InterviewEndDate": "2023-09-27",
        "InterviewState": "Complete",
        "Flight": "KL - KLM",
        "Dest": "AMS",
        "AirlineCode": "KL"
    },
    {
        "InterviewId": "4227",
        "InterviewEndDate": "2023-09-27",
        "InterviewState": "Complete",
        "Flight": "KL - KLM",
        "Dest": "AMS",
        "AirlineCode": "KL"
    },
    {
        "InterviewId": "4231",
        "InterviewEndDate": "2023-09-27",
        "InterviewState": "Complete",
        "Flight": "KL - KLM",
        "Dest": "AMS",
        "AirlineCode": "KL"
    },
    {
        "InterviewId": "4233",
        "InterviewEndDate": "2023-09-27",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "MUC",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "4234",
        "InterviewEndDate": "2023-09-27",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "MUC",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "4235",
        "InterviewEndDate": "2023-09-27",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "MUC",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "4238",
        "InterviewEndDate": "2023-09-27",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "BCN",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "4255",
        "InterviewEndDate": "2023-09-27",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "FRA",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "4256",
        "InterviewEndDate": "2023-09-27",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "FRA",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "4257",
        "InterviewEndDate": "2023-09-27",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "FRA",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "4258",
        "InterviewEndDate": "2023-09-27",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "FRA",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "4266",
        "InterviewEndDate": "2023-09-27",
        "InterviewState": "Complete",
        "Flight": "VY - Vueling Airlines",
        "Dest": "PMI",
        "AirlineCode": "VY"
    },
    {
        "InterviewId": "4267",
        "InterviewEndDate": "2023-09-28",
        "InterviewState": "Complete",
        "Flight": "TK - Turkish Airlines",
        "Dest": "IST",
        "AirlineCode": "TK"
    },
    {
        "InterviewId": "4270",
        "InterviewEndDate": "2023-09-28",
        "InterviewState": "Complete",
        "Flight": "SK - Scandinavian Airlines System (SAS)",
        "Dest": "OSL",
        "AirlineCode": "SK"
    },
    {
        "InterviewId": "4271",
        "InterviewEndDate": "2023-09-28",
        "InterviewState": "Complete",
        "Flight": "SK - Scandinavian Airlines System (SAS)",
        "Dest": "OSL",
        "AirlineCode": "SK"
    },
    {
        "InterviewId": "4276",
        "InterviewEndDate": "2023-09-28",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "TSF",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "4280",
        "InterviewEndDate": "2023-09-28",
        "InterviewState": "Complete",
        "Flight": "KL - KLM",
        "Dest": "AMS",
        "AirlineCode": "KL"
    },
    {
        "InterviewId": "4281",
        "InterviewEndDate": "2023-09-28",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "MAD",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "4285",
        "InterviewEndDate": "2023-09-28",
        "InterviewState": "Complete",
        "Flight": "KL - KLM",
        "Dest": "AMS",
        "AirlineCode": "KL"
    },
    {
        "InterviewId": "4286",
        "InterviewEndDate": "2023-09-28",
        "InterviewState": "Complete",
        "Flight": "LO - LOT",
        "Dest": "WAW",
        "AirlineCode": "LO"
    },
    {
        "InterviewId": "4382",
        "InterviewEndDate": "2023-10-17",
        "InterviewState": "Complete",
        "Flight": "Sas",
        "Dest": "OSL",
        "AirlineCode": "Sas"
    },
    {
        "InterviewId": "4383",
        "InterviewEndDate": "2023-10-17",
        "InterviewState": "Complete",
        "Flight": "SK - Scandinavian Airlines System (SAS)",
        "Dest": "OSL",
        "AirlineCode": "SK"
    },
    {
        "InterviewId": "4386",
        "InterviewEndDate": "2023-10-17",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "POZ",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "4388",
        "InterviewEndDate": "2023-10-17",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "POZ",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "4389",
        "InterviewEndDate": "2023-10-17",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "POZ",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "4395",
        "InterviewEndDate": "2023-10-17",
        "InterviewState": "Complete",
        "Flight": "Lufthansa",
        "Dest": "MUC",
        "AirlineCode": "Lufthansa"
    },
    {
        "InterviewId": "4397",
        "InterviewEndDate": "2023-10-17",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "MUC",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "4399",
        "InterviewEndDate": "2023-10-17",
        "InterviewState": "Complete",
        "Flight": "Eyan",
        "Dest": "EDI",
        "AirlineCode": "Eyan"
    },
    {
        "InterviewId": "4400",
        "InterviewEndDate": "2023-10-17",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "EDI",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "4401",
        "InterviewEndDate": "2023-10-17",
        "InterviewState": "Complete",
        "Flight": "Ryanair",
        "Dest": "MUC",
        "AirlineCode": "Ryanair"
    },
    {
        "InterviewId": "4402",
        "InterviewEndDate": "2023-10-17",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "EDI",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "4403",
        "InterviewEndDate": "2023-10-17",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "EDI",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "4404",
        "InterviewEndDate": "2023-10-17",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "EDI",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "4405",
        "InterviewEndDate": "2023-10-17",
        "InterviewState": "Complete",
        "Flight": "Ryan Air",
        "Dest": "EDI",
        "AirlineCode": "Ryan"
    },
    {
        "InterviewId": "4406",
        "InterviewEndDate": "2023-10-17",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "EDI",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "4407",
        "InterviewEndDate": "2023-10-17",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "FRA",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "4408",
        "InterviewEndDate": "2023-10-17",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "FRA",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "4409",
        "InterviewEndDate": "2023-10-17",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "FRA",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "4410",
        "InterviewEndDate": "2023-10-17",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "FRA",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "4411",
        "InterviewEndDate": "2023-10-17",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "FRA",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "4412",
        "InterviewEndDate": "2023-10-17",
        "InterviewState": "Complete",
        "Flight": "Frankfurt",
        "Dest": "FRA",
        "AirlineCode": "Frankfurt"
    },
    {
        "InterviewId": "4413",
        "InterviewEndDate": "2023-10-17",
        "InterviewState": "Complete",
        "Flight": "Loft hanza",
        "Dest": "FRA",
        "AirlineCode": "Loft"
    },
    {
        "InterviewId": "4415",
        "InterviewEndDate": "2023-10-19",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "MUC",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "4416",
        "InterviewEndDate": "2023-10-19",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "MUC",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "4417",
        "InterviewEndDate": "2023-10-19",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "MUC",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "4418",
        "InterviewEndDate": "2023-10-19",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "MUC",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "4419",
        "InterviewEndDate": "2023-10-19",
        "InterviewState": "Complete",
        "Flight": "Lufthansa",
        "Dest": "MUC",
        "AirlineCode": "Lufthansa"
    },
    {
        "InterviewId": "4420",
        "InterviewEndDate": "2023-10-19",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "MUC",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "4427",
        "InterviewEndDate": "2023-10-19",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "CRL",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "4429",
        "InterviewEndDate": "2023-10-19",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "CRL",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "4431",
        "InterviewEndDate": "2023-10-19",
        "InterviewState": "Complete",
        "Flight": "Ryanair",
        "Dest": "CRL",
        "AirlineCode": "Ryanair"
    },
    {
        "InterviewId": "4432",
        "InterviewEndDate": "2023-10-19",
        "InterviewState": "Complete",
        "Flight": "Ryanair",
        "Dest": "CRL",
        "AirlineCode": "Ryanair"
    },
    {
        "InterviewId": "4433",
        "InterviewEndDate": "2023-10-19",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "CRL",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "4434",
        "InterviewEndDate": "2023-10-19",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "CRL",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "4435",
        "InterviewEndDate": "2023-10-19",
        "InterviewState": "Complete",
        "Flight": "Airbaltic",
        "Dest": "RIX",
        "AirlineCode": "Airbaltic"
    },
    {
        "InterviewId": "4437",
        "InterviewEndDate": "2023-10-19",
        "InterviewState": "Complete",
        "Flight": "Airbaltic",
        "Dest": "RIX",
        "AirlineCode": "Airbaltic"
    },
    {
        "InterviewId": "4438",
        "InterviewEndDate": "2023-10-19",
        "InterviewState": "Complete",
        "Flight": "BT - Air Baltic",
        "Dest": "RIX",
        "AirlineCode": "BT"
    },
    {
        "InterviewId": "4439",
        "InterviewEndDate": "2023-10-19",
        "InterviewState": "Complete",
        "Flight": "AirBaltic",
        "Dest": "RIX",
        "AirlineCode": "AirBaltic"
    },
    {
        "InterviewId": "4440",
        "InterviewEndDate": "2023-10-19",
        "InterviewState": "Complete",
        "Flight": "Airbaltik",
        "Dest": "RIX",
        "AirlineCode": "Airbaltik"
    },
    {
        "InterviewId": "4442",
        "InterviewEndDate": "2023-10-19",
        "InterviewState": "Complete",
        "Flight": "BT - Air Baltic",
        "Dest": "RIX",
        "AirlineCode": "BT"
    },
    {
        "InterviewId": "4443",
        "InterviewEndDate": "2023-10-20",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "STN",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "4444",
        "InterviewEndDate": "2023-10-20",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "STN",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "4445",
        "InterviewEndDate": "2023-10-20",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "STN",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "4446",
        "InterviewEndDate": "2023-10-20",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "STN",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "4447",
        "InterviewEndDate": "2023-10-20",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "STN",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "4448",
        "InterviewEndDate": "2023-10-20",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "STN",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "4449",
        "InterviewEndDate": "2023-10-20",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "STN",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "4453",
        "InterviewEndDate": "2023-10-20",
        "InterviewState": "Complete",
        "Flight": "JTD - Jettime",
        "Dest": "ACE",
        "AirlineCode": "JTD"
    },
    {
        "InterviewId": "4454",
        "InterviewEndDate": "2023-10-20",
        "InterviewState": "Complete",
        "Flight": "Je",
        "Dest": "ACE",
        "AirlineCode": "Je"
    },
    {
        "InterviewId": "4455",
        "InterviewEndDate": "2023-10-20",
        "InterviewState": "Complete",
        "Flight": "JTD - Jettime",
        "Dest": "ACE",
        "AirlineCode": "JTD"
    },
    {
        "InterviewId": "4456",
        "InterviewEndDate": "2023-10-20",
        "InterviewState": "Complete",
        "Flight": "JTD - Jettime",
        "Dest": "ACE",
        "AirlineCode": "JTD"
    },
    {
        "InterviewId": "4457",
        "InterviewEndDate": "2023-10-20",
        "InterviewState": "Complete",
        "Flight": "JTD - Jettime",
        "Dest": "ACE",
        "AirlineCode": "JTD"
    },
    {
        "InterviewId": "4458",
        "InterviewEndDate": "2023-10-20",
        "InterviewState": "Complete",
        "Flight": "JTD - Jettime",
        "Dest": "ACE",
        "AirlineCode": "JTD"
    },
    {
        "InterviewId": "4459",
        "InterviewEndDate": "2023-10-20",
        "InterviewState": "Complete",
        "Flight": "JTD - Jettime",
        "Dest": "ACE",
        "AirlineCode": "JTD"
    },
    {
        "InterviewId": "4460",
        "InterviewEndDate": "2023-10-20",
        "InterviewState": "Complete",
        "Flight": "JTD - Jettime",
        "Dest": "ACE",
        "AirlineCode": "JTD"
    },
    {
        "InterviewId": "4462",
        "InterviewEndDate": "2023-10-20",
        "InterviewState": "Complete",
        "Flight": "RC - Atlantic Airways",
        "Dest": "FUE",
        "AirlineCode": "RC"
    },
    {
        "InterviewId": "4463",
        "InterviewEndDate": "2023-10-20",
        "InterviewState": "Complete",
        "Flight": "RC - Atlantic Airways",
        "Dest": "FUE",
        "AirlineCode": "RC"
    },
    {
        "InterviewId": "4464",
        "InterviewEndDate": "2023-10-20",
        "InterviewState": "Complete",
        "Flight": "RC - Atlantic Airways",
        "Dest": "FUE",
        "AirlineCode": "RC"
    },
    {
        "InterviewId": "4465",
        "InterviewEndDate": "2023-10-20",
        "InterviewState": "Complete",
        "Flight": "RC - Atlantic Airways",
        "Dest": "FUE",
        "AirlineCode": "RC"
    },
    {
        "InterviewId": "4466",
        "InterviewEndDate": "2023-10-20",
        "InterviewState": "Complete",
        "Flight": "RC - Atlantic Airways",
        "Dest": "FUE",
        "AirlineCode": "RC"
    },
    {
        "InterviewId": "4467",
        "InterviewEndDate": "2023-10-20",
        "InterviewState": "Complete",
        "Flight": "RC - Atlantic Airways",
        "Dest": "FUE",
        "AirlineCode": "RC"
    },
    {
        "InterviewId": "4468",
        "InterviewEndDate": "2023-10-20",
        "InterviewState": "Complete",
        "Flight": "RC - Atlantic Airways",
        "Dest": "FUE",
        "AirlineCode": "RC"
    },
    {
        "InterviewId": "4482",
        "InterviewEndDate": "2023-10-23",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "FRA",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "4484",
        "InterviewEndDate": "2023-10-23",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "FRA",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "4486",
        "InterviewEndDate": "2023-10-23",
        "InterviewState": "Complete",
        "Flight": "RC - Atlantic Airways",
        "Dest": "BGO",
        "AirlineCode": "RC"
    },
    {
        "InterviewId": "4487",
        "InterviewEndDate": "2023-10-23",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "FRA",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "4488",
        "InterviewEndDate": "2023-10-23",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "MLA",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "4489",
        "InterviewEndDate": "2023-10-23",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "MLA",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "4490",
        "InterviewEndDate": "2023-10-23",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "MLA",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "4492",
        "InterviewEndDate": "2023-10-23",
        "InterviewState": "Complete",
        "Flight": "RC - Atlantic Airways",
        "Dest": "BGO",
        "AirlineCode": "RC"
    },
    {
        "InterviewId": "4493",
        "InterviewEndDate": "2023-10-23",
        "InterviewState": "Complete",
        "Flight": "RC - Atlantic Airways",
        "Dest": "BGO",
        "AirlineCode": "RC"
    },
    {
        "InterviewId": "4496",
        "InterviewEndDate": "2023-10-27",
        "InterviewState": "Complete",
        "Flight": "AF - AIR FRANCE",
        "Dest": "CDG",
        "AirlineCode": "AF"
    },
    {
        "InterviewId": "4497",
        "InterviewEndDate": "2023-10-27",
        "InterviewState": "Complete",
        "Flight": "AY - Finnair",
        "Dest": "CDG",
        "AirlineCode": "AY"
    },
    {
        "InterviewId": "4498",
        "InterviewEndDate": "2023-10-27",
        "InterviewState": "Complete",
        "Flight": "AF - AIR FRANCE",
        "Dest": "CDG",
        "AirlineCode": "AF"
    },
    {
        "InterviewId": "4499",
        "InterviewEndDate": "2023-10-27",
        "InterviewState": "Complete",
        "Flight": "AF - AIR FRANCE",
        "Dest": "CDG",
        "AirlineCode": "AF"
    },
    {
        "InterviewId": "4500",
        "InterviewEndDate": "2023-10-27",
        "InterviewState": "Complete",
        "Flight": "AF - AIR FRANCE",
        "Dest": "CDG",
        "AirlineCode": "AF"
    },
    {
        "InterviewId": "4502",
        "InterviewEndDate": "2023-10-27",
        "InterviewState": "Complete",
        "Flight": "AF - AIR FRANCE",
        "Dest": "CDG",
        "AirlineCode": "AF"
    },
    {
        "InterviewId": "4503",
        "InterviewEndDate": "2023-10-27",
        "InterviewState": "Complete",
        "Flight": "AF - AIR FRANCE",
        "Dest": "CDG",
        "AirlineCode": "AF"
    },
    {
        "InterviewId": "4504",
        "InterviewEndDate": "2023-10-27",
        "InterviewState": "Complete",
        "Flight": "AF - AIR FRANCE",
        "Dest": "CDG",
        "AirlineCode": "AF"
    },
    {
        "InterviewId": "4513",
        "InterviewEndDate": "2023-10-29",
        "InterviewState": "Complete",
        "Flight": "LO - LOT",
        "Dest": "WAW",
        "AirlineCode": "LO"
    },
    {
        "InterviewId": "4515",
        "InterviewEndDate": "2023-10-29",
        "InterviewState": "Complete",
        "Flight": "LO - LOT",
        "Dest": "WAW",
        "AirlineCode": "LO"
    },
    {
        "InterviewId": "4516",
        "InterviewEndDate": "2023-10-29",
        "InterviewState": "Complete",
        "Flight": "LO - LOT",
        "Dest": "WAW",
        "AirlineCode": "LO"
    },
    {
        "InterviewId": "4517",
        "InterviewEndDate": "2023-10-29",
        "InterviewState": "Complete",
        "Flight": "LO - LOT",
        "Dest": "WAW",
        "AirlineCode": "LO"
    },
    {
        "InterviewId": "4519",
        "InterviewEndDate": "2023-10-29",
        "InterviewState": "Complete",
        "Flight": "LO - LOT",
        "Dest": "WAW",
        "AirlineCode": "LO"
    },
    {
        "InterviewId": "4522",
        "InterviewEndDate": "2023-10-29",
        "InterviewState": "Complete",
        "Flight": "JTD - Jettime",
        "Dest": "LPA",
        "AirlineCode": "JTD"
    },
    {
        "InterviewId": "4523",
        "InterviewEndDate": "2023-10-29",
        "InterviewState": "Complete",
        "Flight": "JTD - Jettime",
        "Dest": "LPA",
        "AirlineCode": "JTD"
    },
    {
        "InterviewId": "4524",
        "InterviewEndDate": "2023-10-29",
        "InterviewState": "Complete",
        "Flight": "JTD - Jettime",
        "Dest": "LPA",
        "AirlineCode": "JTD"
    },
    {
        "InterviewId": "4525",
        "InterviewEndDate": "2023-10-29",
        "InterviewState": "Complete",
        "Flight": "JTD - Jettime",
        "Dest": "LPA",
        "AirlineCode": "JTD"
    },
    {
        "InterviewId": "4526",
        "InterviewEndDate": "2023-10-29",
        "InterviewState": "Complete",
        "Flight": "Jettine",
        "Dest": "LPA",
        "AirlineCode": "Jettine"
    },
    {
        "InterviewId": "4528",
        "InterviewEndDate": "2023-10-29",
        "InterviewState": "Complete",
        "Flight": "JTD - Jettime",
        "Dest": "LPA",
        "AirlineCode": "JTD"
    },
    {
        "InterviewId": "4529",
        "InterviewEndDate": "2023-10-29",
        "InterviewState": "Complete",
        "Flight": "JTD - Jettime",
        "Dest": "LPA",
        "AirlineCode": "JTD"
    },
    {
        "InterviewId": "4531",
        "InterviewEndDate": "2023-10-30",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "AGP",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "4532",
        "InterviewEndDate": "2023-10-30",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "AGP",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "4533",
        "InterviewEndDate": "2023-10-30",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "AGP",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "4534",
        "InterviewEndDate": "2023-10-30",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "AGP",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "4541",
        "InterviewEndDate": "2023-10-31",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "AGP",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "4542",
        "InterviewEndDate": "2023-10-31",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "AGP",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "4543",
        "InterviewEndDate": "2023-10-31",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "AGP",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "4545",
        "InterviewEndDate": "2023-10-31",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "AGP",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "4552",
        "InterviewEndDate": "2023-10-31",
        "InterviewState": "Complete",
        "Flight": "SK - Scandinavian Airlines System (SAS)",
        "Dest": "ARN",
        "AirlineCode": "SK"
    },
    {
        "InterviewId": "4553",
        "InterviewEndDate": "2023-10-31",
        "InterviewState": "Complete",
        "Flight": "SK - Scandinavian Airlines System (SAS)",
        "Dest": "ARN",
        "AirlineCode": "SK"
    },
    {
        "InterviewId": "4554",
        "InterviewEndDate": "2023-10-31",
        "InterviewState": "Complete",
        "Flight": "SK - Scandinavian Airlines System (SAS)",
        "Dest": "ARN",
        "AirlineCode": "SK"
    },
    {
        "InterviewId": "4557",
        "InterviewEndDate": "2023-10-31",
        "InterviewState": "Complete",
        "Flight": "Frankfurt",
        "Dest": "FRA",
        "AirlineCode": "Frankfurt"
    },
    {
        "InterviewId": "4558",
        "InterviewEndDate": "2023-10-31",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "FRA",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "4559",
        "InterviewEndDate": "2023-10-31",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "FRA",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "4560",
        "InterviewEndDate": "2023-10-31",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "FRA",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "4561",
        "InterviewEndDate": "2023-10-31",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "FRA",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "4562",
        "InterviewEndDate": "2023-10-31",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "FRA",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "4563",
        "InterviewEndDate": "2023-10-31",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "FRA",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "4565",
        "InterviewEndDate": "2023-10-31",
        "InterviewState": "Complete",
        "Flight": "DY - Norwegian Air Schuttle",
        "Dest": "OSL",
        "AirlineCode": "DY"
    },
    {
        "InterviewId": "4566",
        "InterviewEndDate": "2023-10-31",
        "InterviewState": "Complete",
        "Flight": "DY - Norwegian Air Schuttle",
        "Dest": "OSL",
        "AirlineCode": "DY"
    },
    {
        "InterviewId": "4567",
        "InterviewEndDate": "2023-10-31",
        "InterviewState": "Complete",
        "Flight": "DY - Norwegian Air Schuttle",
        "Dest": "OSL",
        "AirlineCode": "DY"
    },
    {
        "InterviewId": "4569",
        "InterviewEndDate": "2023-10-31",
        "InterviewState": "Complete",
        "Flight": "DY - Norwegian Air Schuttle",
        "Dest": "OSL",
        "AirlineCode": "DY"
    },
    {
        "InterviewId": "4570",
        "InterviewEndDate": "2023-10-31",
        "InterviewState": "Complete",
        "Flight": "DY - Norwegian Air Schuttle",
        "Dest": "OSL",
        "AirlineCode": "DY"
    },
    {
        "InterviewId": "4571",
        "InterviewEndDate": "2023-10-31",
        "InterviewState": "Complete",
        "Flight": "DY - Norwegian Air Schuttle",
        "Dest": "OSL",
        "AirlineCode": "DY"
    },
    {
        "InterviewId": "4573",
        "InterviewEndDate": "2023-10-31",
        "InterviewState": "Complete",
        "Flight": "KL - KLM",
        "Dest": "AMS",
        "AirlineCode": "KL"
    },
    {
        "InterviewId": "4574",
        "InterviewEndDate": "2023-10-31",
        "InterviewState": "Complete",
        "Flight": "KL - KLM",
        "Dest": "AMS",
        "AirlineCode": "KL"
    },
    {
        "InterviewId": "4576",
        "InterviewEndDate": "2023-10-31",
        "InterviewState": "Complete",
        "Flight": "KL - KLM",
        "Dest": "AMS",
        "AirlineCode": "KL"
    },
    {
        "InterviewId": "4577",
        "InterviewEndDate": "2023-10-31",
        "InterviewState": "Complete",
        "Flight": "KL - KLM",
        "Dest": "AMS",
        "AirlineCode": "KL"
    },
    {
        "InterviewId": "4578",
        "InterviewEndDate": "2023-10-31",
        "InterviewState": "Complete",
        "Flight": "KL - KLM",
        "Dest": "AMS",
        "AirlineCode": "KL"
    },
    {
        "InterviewId": "4579",
        "InterviewEndDate": "2023-10-31",
        "InterviewState": "Complete",
        "Flight": "Klm",
        "Dest": "AMS",
        "AirlineCode": "Klm"
    },
    {
        "InterviewId": "4580",
        "InterviewEndDate": "2023-10-31",
        "InterviewState": "Complete",
        "Flight": "KL - KLM",
        "Dest": "AMS",
        "AirlineCode": "KL"
    },
    {
        "InterviewId": "4582",
        "InterviewEndDate": "2023-10-31",
        "InterviewState": "Complete",
        "Flight": "SK - Scandinavian Airlines System (SAS)",
        "Dest": "OSL",
        "AirlineCode": "SK"
    },
    {
        "InterviewId": "4585",
        "InterviewEndDate": "2023-10-31",
        "InterviewState": "Complete",
        "Flight": "SK - Scandinavian Airlines System (SAS)",
        "Dest": "OSL",
        "AirlineCode": "SK"
    },
    {
        "InterviewId": "4591",
        "InterviewEndDate": "2023-11-01",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "MLA",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "4594",
        "InterviewEndDate": "2023-11-01",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "MLA",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "4595",
        "InterviewEndDate": "2023-11-01",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "MLA",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "4596",
        "InterviewEndDate": "2023-11-01",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "MLA",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "4597",
        "InterviewEndDate": "2023-11-01",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "MLA",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "4598",
        "InterviewEndDate": "2023-11-01",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "MLA",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "4603",
        "InterviewEndDate": "2023-11-01",
        "InterviewState": "Complete",
        "Flight": "SK - Scandinavian Airlines System (SAS)",
        "Dest": "ARN",
        "AirlineCode": "SK"
    },
    {
        "InterviewId": "4604",
        "InterviewEndDate": "2023-11-01",
        "InterviewState": "Complete",
        "Flight": "Lufthansa",
        "Dest": "FRA",
        "AirlineCode": "Lufthansa"
    },
    {
        "InterviewId": "4605",
        "InterviewEndDate": "2023-11-01",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "FRA",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "4606",
        "InterviewEndDate": "2023-11-01",
        "InterviewState": "Complete",
        "Flight": "Lufthansa",
        "Dest": "FRA",
        "AirlineCode": "Lufthansa"
    },
    {
        "InterviewId": "4607",
        "InterviewEndDate": "2023-11-01",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "FRA",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "4608",
        "InterviewEndDate": "2023-11-01",
        "InterviewState": "Complete",
        "Flight": "Lufthansa",
        "Dest": "FRA",
        "AirlineCode": "Lufthansa"
    },
    {
        "InterviewId": "4609",
        "InterviewEndDate": "2023-11-01",
        "InterviewState": "Complete",
        "Flight": "DY - Norwegian Air Schuttle",
        "Dest": "OSL",
        "AirlineCode": "DY"
    },
    {
        "InterviewId": "4610",
        "InterviewEndDate": "2023-11-01",
        "InterviewState": "Complete",
        "Flight": "DY - Norwegian Air Schuttle",
        "Dest": "OSL",
        "AirlineCode": "DY"
    },
    {
        "InterviewId": "4611",
        "InterviewEndDate": "2023-11-01",
        "InterviewState": "Complete",
        "Flight": "DY - Norwegian Air Schuttle",
        "Dest": "OSL",
        "AirlineCode": "DY"
    },
    {
        "InterviewId": "4612",
        "InterviewEndDate": "2023-11-01",
        "InterviewState": "Complete",
        "Flight": "DY - Norwegian Air Schuttle",
        "Dest": "OSL",
        "AirlineCode": "DY"
    },
    {
        "InterviewId": "4613",
        "InterviewEndDate": "2023-11-01",
        "InterviewState": "Complete",
        "Flight": "DY - Norwegian Air Schuttle",
        "Dest": "OSL",
        "AirlineCode": "DY"
    },
    {
        "InterviewId": "4614",
        "InterviewEndDate": "2023-11-01",
        "InterviewState": "Complete",
        "Flight": "Klm",
        "Dest": "AMS",
        "AirlineCode": "Klm"
    },
    {
        "InterviewId": "4615",
        "InterviewEndDate": "2023-11-01",
        "InterviewState": "Complete",
        "Flight": "Klm",
        "Dest": "AMS",
        "AirlineCode": "Klm"
    },
    {
        "InterviewId": "4617",
        "InterviewEndDate": "2023-11-01",
        "InterviewState": "Complete",
        "Flight": "KL - KLM",
        "Dest": "AMS",
        "AirlineCode": "KL"
    },
    {
        "InterviewId": "4618",
        "InterviewEndDate": "2023-11-01",
        "InterviewState": "Complete",
        "Flight": "KL - KLM",
        "Dest": "AMS",
        "AirlineCode": "KL"
    },
    {
        "InterviewId": "4619",
        "InterviewEndDate": "2023-11-04",
        "InterviewState": "Complete",
        "Flight": "Air France",
        "Dest": "CDG",
        "AirlineCode": "Air"
    },
    {
        "InterviewId": "4620",
        "InterviewEndDate": "2023-11-04",
        "InterviewState": "Complete",
        "Flight": "AF - AIR FRANCE",
        "Dest": "CDG",
        "AirlineCode": "AF"
    },
    {
        "InterviewId": "4621",
        "InterviewEndDate": "2023-11-04",
        "InterviewState": "Complete",
        "Flight": "AF - AIR FRANCE",
        "Dest": "CDG",
        "AirlineCode": "AF"
    },
    {
        "InterviewId": "4622",
        "InterviewEndDate": "2023-11-04",
        "InterviewState": "Complete",
        "Flight": "AF - AIR FRANCE",
        "Dest": "CDG",
        "AirlineCode": "AF"
    },
    {
        "InterviewId": "4623",
        "InterviewEndDate": "2023-11-04",
        "InterviewState": "Complete",
        "Flight": "AF - AIR FRANCE",
        "Dest": "CDG",
        "AirlineCode": "AF"
    },
    {
        "InterviewId": "4624",
        "InterviewEndDate": "2023-11-04",
        "InterviewState": "Complete",
        "Flight": "AF - AIR FRANCE",
        "Dest": "CDG",
        "AirlineCode": "AF"
    },
    {
        "InterviewId": "4625",
        "InterviewEndDate": "2023-11-04",
        "InterviewState": "Complete",
        "Flight": "Klm",
        "Dest": "CDG",
        "AirlineCode": "Klm"
    },
    {
        "InterviewId": "4626",
        "InterviewEndDate": "2023-11-04",
        "InterviewState": "Complete",
        "Flight": "AF - AIR FRANCE",
        "Dest": "CDG",
        "AirlineCode": "AF"
    },
    {
        "InterviewId": "4633",
        "InterviewEndDate": "2023-11-06",
        "InterviewState": "Complete",
        "Flight": "LO - LOT",
        "Dest": "WAW",
        "AirlineCode": "LO"
    },
    {
        "InterviewId": "4634",
        "InterviewEndDate": "2023-11-06",
        "InterviewState": "Complete",
        "Flight": "LO - LOT",
        "Dest": "WAW",
        "AirlineCode": "LO"
    },
    {
        "InterviewId": "4635",
        "InterviewEndDate": "2023-11-06",
        "InterviewState": "Complete",
        "Flight": "LO - LOT",
        "Dest": "WAW",
        "AirlineCode": "LO"
    },
    {
        "InterviewId": "4636",
        "InterviewEndDate": "2023-11-08",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "MLA",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "4638",
        "InterviewEndDate": "2023-11-08",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "MLA",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "4641",
        "InterviewEndDate": "2023-11-08",
        "InterviewState": "Complete",
        "Flight": "Ryan",
        "Dest": "MLA",
        "AirlineCode": "Ryan"
    },
    {
        "InterviewId": "4642",
        "InterviewEndDate": "2023-11-08",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "MLA",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "4643",
        "InterviewEndDate": "2023-11-08",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "MLA",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "4644",
        "InterviewEndDate": "2023-11-08",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "MLA",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "4645",
        "InterviewEndDate": "2023-11-08",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "MLA",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "4646",
        "InterviewEndDate": "2023-11-08",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "MLA",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "4647",
        "InterviewEndDate": "2023-11-08",
        "InterviewState": "Complete",
        "Flight": "KL - KLM",
        "Dest": "AMS",
        "AirlineCode": "KL"
    },
    {
        "InterviewId": "4648",
        "InterviewEndDate": "2023-11-08",
        "InterviewState": "Complete",
        "Flight": "KLM",
        "Dest": "AMS",
        "AirlineCode": "KLM"
    },
    {
        "InterviewId": "4649",
        "InterviewEndDate": "2023-11-08",
        "InterviewState": "Complete",
        "Flight": "Klm",
        "Dest": "AMS",
        "AirlineCode": "Klm"
    },
    {
        "InterviewId": "4650",
        "InterviewEndDate": "2023-11-08",
        "InterviewState": "Complete",
        "Flight": "KL - KLM",
        "Dest": "AMS",
        "AirlineCode": "KL"
    },
    {
        "InterviewId": "4652",
        "InterviewEndDate": "2023-11-08",
        "InterviewState": "Complete",
        "Flight": "Klm",
        "Dest": "AMS",
        "AirlineCode": "Klm"
    },
    {
        "InterviewId": "4653",
        "InterviewEndDate": "2023-11-08",
        "InterviewState": "Complete",
        "Flight": "Klm",
        "Dest": "AMS",
        "AirlineCode": "Klm"
    },
    {
        "InterviewId": "4654",
        "InterviewEndDate": "2023-11-08",
        "InterviewState": "Complete",
        "Flight": "KL - KLM",
        "Dest": "AMS",
        "AirlineCode": "KL"
    },
    {
        "InterviewId": "4657",
        "InterviewEndDate": "2023-11-08",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "FRA",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "4662",
        "InterviewEndDate": "2023-11-08",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "FRA",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "4664",
        "InterviewEndDate": "2023-11-08",
        "InterviewState": "Complete",
        "Flight": "DY - Norwegian Air Schuttle",
        "Dest": "OSL",
        "AirlineCode": "DY"
    },
    {
        "InterviewId": "4669",
        "InterviewEndDate": "2023-11-08",
        "InterviewState": "Complete",
        "Flight": "DY - Norwegian Air Schuttle",
        "Dest": "OSL",
        "AirlineCode": "DY"
    },
    {
        "InterviewId": "4673",
        "InterviewEndDate": "2023-11-11",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "FRA",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "4674",
        "InterviewEndDate": "2023-11-11",
        "InterviewState": "Complete",
        "Flight": "Lufthansa",
        "Dest": "FRA",
        "AirlineCode": "Lufthansa"
    },
    {
        "InterviewId": "4675",
        "InterviewEndDate": "2023-11-11",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "FRA",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "4676",
        "InterviewEndDate": "2023-11-11",
        "InterviewState": "Complete",
        "Flight": "KL - KLM",
        "Dest": "AMS",
        "AirlineCode": "KL"
    },
    {
        "InterviewId": "4678",
        "InterviewEndDate": "2023-11-11",
        "InterviewState": "Complete",
        "Flight": "Klm",
        "Dest": "AMS",
        "AirlineCode": "Klm"
    },
    {
        "InterviewId": "4679",
        "InterviewEndDate": "2023-11-11",
        "InterviewState": "Complete",
        "Flight": "KL - KLM",
        "Dest": "AMS",
        "AirlineCode": "KL"
    },
    {
        "InterviewId": "4680",
        "InterviewEndDate": "2023-11-11",
        "InterviewState": "Complete",
        "Flight": "KL - KLM",
        "Dest": "AMS",
        "AirlineCode": "KL"
    },
    {
        "InterviewId": "4681",
        "InterviewEndDate": "2023-11-11",
        "InterviewState": "Complete",
        "Flight": "KL - KLM",
        "Dest": "AMS",
        "AirlineCode": "KL"
    },
    {
        "InterviewId": "4683",
        "InterviewEndDate": "2023-11-11",
        "InterviewState": "Complete",
        "Flight": "KL - KLM",
        "Dest": "AMS",
        "AirlineCode": "KL"
    },
    {
        "InterviewId": "4684",
        "InterviewEndDate": "2023-11-11",
        "InterviewState": "Complete",
        "Flight": "KL - KLM",
        "Dest": "AMS",
        "AirlineCode": "KL"
    },
    {
        "InterviewId": "4685",
        "InterviewEndDate": "2023-11-11",
        "InterviewState": "Complete",
        "Flight": "KL - KLM",
        "Dest": "AMS",
        "AirlineCode": "KL"
    },
    {
        "InterviewId": "4701",
        "InterviewEndDate": "2023-11-12",
        "InterviewState": "Complete",
        "Flight": "KL - KLM",
        "Dest": "AMS",
        "AirlineCode": "KL"
    },
    {
        "InterviewId": "4702",
        "InterviewEndDate": "2023-11-12",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "LCY",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "4705",
        "InterviewEndDate": "2023-11-12",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "MUC",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "4711",
        "InterviewEndDate": "2023-11-12",
        "InterviewState": "Complete",
        "Flight": "Ra",
        "Dest": "MLA",
        "AirlineCode": "Ra"
    },
    {
        "InterviewId": "4712",
        "InterviewEndDate": "2023-11-12",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "MLA",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "4713",
        "InterviewEndDate": "2023-11-12",
        "InterviewState": "Complete",
        "Flight": "Baltic air",
        "Dest": "RIX",
        "AirlineCode": "Baltic"
    },
    {
        "InterviewId": "4724",
        "InterviewEndDate": "2023-11-13",
        "InterviewState": "Complete",
        "Flight": "RC - Atlantic Airways",
        "Dest": "FAE",
        "AirlineCode": "RC"
    },
    {
        "InterviewId": "4725",
        "InterviewEndDate": "2023-11-13",
        "InterviewState": "Complete",
        "Flight": "RC - Atlantic Airways",
        "Dest": "FAE",
        "AirlineCode": "RC"
    },
    {
        "InterviewId": "4726",
        "InterviewEndDate": "2023-11-13",
        "InterviewState": "Complete",
        "Flight": "RC - Atlantic Airways",
        "Dest": "FAE",
        "AirlineCode": "RC"
    },
    {
        "InterviewId": "4727",
        "InterviewEndDate": "2023-11-13",
        "InterviewState": "Complete",
        "Flight": "RC - Atlantic Airways",
        "Dest": "FAE",
        "AirlineCode": "RC"
    },
    {
        "InterviewId": "4728",
        "InterviewEndDate": "2023-11-13",
        "InterviewState": "Complete",
        "Flight": "JTD - Jettime",
        "Dest": "FUE",
        "AirlineCode": "JTD"
    },
    {
        "InterviewId": "4729",
        "InterviewEndDate": "2023-11-13",
        "InterviewState": "Complete",
        "Flight": "JTD - Jettime",
        "Dest": "FUE",
        "AirlineCode": "JTD"
    },
    {
        "InterviewId": "4730",
        "InterviewEndDate": "2023-11-13",
        "InterviewState": "Complete",
        "Flight": "JTD - Jettime",
        "Dest": "FUE",
        "AirlineCode": "JTD"
    },
    {
        "InterviewId": "4731",
        "InterviewEndDate": "2023-11-13",
        "InterviewState": "Complete",
        "Flight": "JTD - Jettime",
        "Dest": "FUE",
        "AirlineCode": "JTD"
    },
    {
        "InterviewId": "4732",
        "InterviewEndDate": "2023-11-13",
        "InterviewState": "Complete",
        "Flight": "JTD - Jettime",
        "Dest": "FUE",
        "AirlineCode": "JTD"
    },
    {
        "InterviewId": "4745",
        "InterviewEndDate": "2023-11-14",
        "InterviewState": "Complete",
        "Flight": "Klm",
        "Dest": "AMS",
        "AirlineCode": "Klm"
    },
    {
        "InterviewId": "4746",
        "InterviewEndDate": "2023-11-14",
        "InterviewState": "Complete",
        "Flight": "KL - KLM",
        "Dest": "AMS",
        "AirlineCode": "KL"
    },
    {
        "InterviewId": "4747",
        "InterviewEndDate": "2023-11-14",
        "InterviewState": "Complete",
        "Flight": "KL - KLM",
        "Dest": "KRK",
        "AirlineCode": "KL"
    },
    {
        "InterviewId": "4748",
        "InterviewEndDate": "2023-11-14",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "MUC",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "4751",
        "InterviewEndDate": "2023-11-14",
        "InterviewState": "Complete",
        "Flight": "KL - KLM",
        "Dest": "AMS",
        "AirlineCode": "KL"
    },
    {
        "InterviewId": "4754",
        "InterviewEndDate": "2023-11-14",
        "InterviewState": "Complete",
        "Flight": "KL - KL",
        "Dest": "AMS",
        "AirlineCode": "KL"
    },
    {
        "InterviewId": "4755",
        "InterviewEndDate": "2023-11-14",
        "InterviewState": "Complete",
        "Flight": "KL - KLM",
        "Dest": "AMS",
        "AirlineCode": "KL"
    },
    {
        "InterviewId": "4757",
        "InterviewEndDate": "2023-11-14",
        "InterviewState": "Complete",
        "Flight": "KL - KLM",
        "Dest": "AMS",
        "AirlineCode": "KL"
    },
    {
        "InterviewId": "4762",
        "InterviewEndDate": "2023-11-14",
        "InterviewState": "Complete",
        "Flight": "SK - Scandinavian Airlines System (SAS)",
        "Dest": "OSL",
        "AirlineCode": "SK"
    },
    {
        "InterviewId": "4765",
        "InterviewEndDate": "2023-11-14",
        "InterviewState": "Complete",
        "Flight": "SK - Scandinavian Airlines System (SAS)",
        "Dest": "OSL",
        "AirlineCode": "SK"
    },
    {
        "InterviewId": "4769",
        "InterviewEndDate": "2023-11-21",
        "InterviewState": "Complete",
        "Flight": "KL - KLM",
        "Dest": "AMS",
        "AirlineCode": "KL"
    },
    {
        "InterviewId": "4771",
        "InterviewEndDate": "2023-11-21",
        "InterviewState": "Complete",
        "Flight": "KL - KLM",
        "Dest": "AMS",
        "AirlineCode": "KL"
    },
    {
        "InterviewId": "4772",
        "InterviewEndDate": "2023-11-21",
        "InterviewState": "Complete",
        "Flight": "KL - KLM",
        "Dest": "AMS",
        "AirlineCode": "KL"
    },
    {
        "InterviewId": "4773",
        "InterviewEndDate": "2023-11-21",
        "InterviewState": "Complete",
        "Flight": "KL - KLM",
        "Dest": "AMS",
        "AirlineCode": "KL"
    },
    {
        "InterviewId": "4774",
        "InterviewEndDate": "2023-11-21",
        "InterviewState": "Complete",
        "Flight": "KL - KLM",
        "Dest": "AMS",
        "AirlineCode": "KL"
    },
    {
        "InterviewId": "4775",
        "InterviewEndDate": "2023-11-21",
        "InterviewState": "Complete",
        "Flight": "KL - KLM",
        "Dest": "AMS",
        "AirlineCode": "KL"
    },
    {
        "InterviewId": "4776",
        "InterviewEndDate": "2023-11-21",
        "InterviewState": "Complete",
        "Flight": "KL - KLM",
        "Dest": "AMS",
        "AirlineCode": "KL"
    },
    {
        "InterviewId": "4777",
        "InterviewEndDate": "2023-11-21",
        "InterviewState": "Complete",
        "Flight": "KL - KLM",
        "Dest": "AMS",
        "AirlineCode": "KL"
    },
    {
        "InterviewId": "4788",
        "InterviewEndDate": "2023-11-24",
        "InterviewState": "Complete",
        "Flight": "Lufhansa",
        "Dest": "GNB",
        "AirlineCode": "Lufhansa"
    },
    {
        "InterviewId": "4789",
        "InterviewEndDate": "2023-11-24",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "FRA",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "4792",
        "InterviewEndDate": "2023-11-24",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "FRA",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "4793",
        "InterviewEndDate": "2023-11-24",
        "InterviewState": "Complete",
        "Flight": "KL - KLM",
        "Dest": "AMS",
        "AirlineCode": "KL"
    },
    {
        "InterviewId": "4794",
        "InterviewEndDate": "2023-11-24",
        "InterviewState": "Complete",
        "Flight": "KL - KLM",
        "Dest": "AMS",
        "AirlineCode": "KL"
    },
    {
        "InterviewId": "4796",
        "InterviewEndDate": "2023-11-24",
        "InterviewState": "Complete",
        "Flight": "KL - KLM",
        "Dest": "AMS",
        "AirlineCode": "KL"
    },
    {
        "InterviewId": "4798",
        "InterviewEndDate": "2023-11-24",
        "InterviewState": "Complete",
        "Flight": "Klm",
        "Dest": "AMS",
        "AirlineCode": "Klm"
    },
    {
        "InterviewId": "4800",
        "InterviewEndDate": "2023-11-24",
        "InterviewState": "Complete",
        "Flight": "KL - KLM",
        "Dest": "AMS",
        "AirlineCode": "KL"
    },
    {
        "InterviewId": "4805",
        "InterviewEndDate": "2023-11-24",
        "InterviewState": "Complete",
        "Flight": "AF - AIR FRANCE",
        "Dest": "CDG",
        "AirlineCode": "AF"
    },
    {
        "InterviewId": "4811",
        "InterviewEndDate": "2023-11-25",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "FRA",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "4813",
        "InterviewEndDate": "2023-11-25",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "FRA",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "4816",
        "InterviewEndDate": "2023-11-25",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "FRA",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "4823",
        "InterviewEndDate": "2023-11-25",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "ALC",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "4824",
        "InterviewEndDate": "2023-11-25",
        "InterviewState": "Complete",
        "Flight": "Ryanair",
        "Dest": "ALC",
        "AirlineCode": "Ryanair"
    },
    {
        "InterviewId": "4828",
        "InterviewEndDate": "2023-11-25",
        "InterviewState": "Complete",
        "Flight": "Ry",
        "Dest": "ALC",
        "AirlineCode": "Ry"
    },
    {
        "InterviewId": "4835",
        "InterviewEndDate": "2023-11-25",
        "InterviewState": "Complete",
        "Flight": "KL - KLM",
        "Dest": "AMS",
        "AirlineCode": "KL"
    },
    {
        "InterviewId": "4836",
        "InterviewEndDate": "2023-11-25",
        "InterviewState": "Complete",
        "Flight": "Klm",
        "Dest": "AMS",
        "AirlineCode": "Klm"
    },
    {
        "InterviewId": "4837",
        "InterviewEndDate": "2023-11-25",
        "InterviewState": "Complete",
        "Flight": "KL - KLM",
        "Dest": "AMS",
        "AirlineCode": "KL"
    },
    {
        "InterviewId": "4848",
        "InterviewEndDate": "2023-11-27",
        "InterviewState": "Complete",
        "Flight": "SK - Scandinavian Airlines System (SAS)",
        "Dest": "ARN",
        "AirlineCode": "SK"
    },
    {
        "InterviewId": "4849",
        "InterviewEndDate": "2023-11-27",
        "InterviewState": "Complete",
        "Flight": "SK - Scandinavian Airlines System (SAS)",
        "Dest": "ARN",
        "AirlineCode": "SK"
    },
    {
        "InterviewId": "4855",
        "InterviewEndDate": "2023-11-27",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "GDN",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "4856",
        "InterviewEndDate": "2023-11-27",
        "InterviewState": "Complete",
        "Flight": "JTD - Jettime",
        "Dest": "FUE",
        "AirlineCode": "JTD"
    },
    {
        "InterviewId": "4857",
        "InterviewEndDate": "2023-11-27",
        "InterviewState": "Complete",
        "Flight": "JTD - Jettime",
        "Dest": "FUE",
        "AirlineCode": "JTD"
    },
    {
        "InterviewId": "4858",
        "InterviewEndDate": "2023-11-27",
        "InterviewState": "Complete",
        "Flight": "JTD - Jettime",
        "Dest": "FUE",
        "AirlineCode": "JTD"
    },
    {
        "InterviewId": "4862",
        "InterviewEndDate": "2023-11-27",
        "InterviewState": "Complete",
        "Flight": "JTD - Jettime",
        "Dest": "FUE",
        "AirlineCode": "JTD"
    },
    {
        "InterviewId": "4865",
        "InterviewEndDate": "2023-11-27",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "AGP",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "4867",
        "InterviewEndDate": "2023-11-28",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "MUC",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "4869",
        "InterviewEndDate": "2023-11-28",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "MUC",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "4870",
        "InterviewEndDate": "2023-11-28",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "MUC",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "4871",
        "InterviewEndDate": "2023-11-28",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "MUC",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "4872",
        "InterviewEndDate": "2023-11-28",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "MUC",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "4873",
        "InterviewEndDate": "2023-11-28",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "MUC",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "4874",
        "InterviewEndDate": "2023-11-28",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "MUC",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "4877",
        "InterviewEndDate": "2023-11-28",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "STN",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "4878",
        "InterviewEndDate": "2023-11-28",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "STN",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "4879",
        "InterviewEndDate": "2023-11-28",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "STN",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "4882",
        "InterviewEndDate": "2023-11-28",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "STN",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "4883",
        "InterviewEndDate": "2023-11-28",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "STN",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "4884",
        "InterviewEndDate": "2023-11-28",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "STN",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "4886",
        "InterviewEndDate": "2023-11-28",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "STN",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "4887",
        "InterviewEndDate": "2023-11-28",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "STN",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "4888",
        "InterviewEndDate": "2023-11-28",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "STN",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "4892",
        "InterviewEndDate": "2023-11-28",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "FRA",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "4893",
        "InterviewEndDate": "2023-11-28",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "FRA",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "4894",
        "InterviewEndDate": "2023-11-28",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "FRA",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "4895",
        "InterviewEndDate": "2023-11-28",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "FRA",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "4896",
        "InterviewEndDate": "2023-11-28",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "FRA",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "4897",
        "InterviewEndDate": "2023-11-28",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "FRA",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "4898",
        "InterviewEndDate": "2023-11-28",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "FRA",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "4899",
        "InterviewEndDate": "2023-11-28",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "FRA",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "4906",
        "InterviewEndDate": "2023-11-28",
        "InterviewState": "Complete",
        "Flight": "AF - AIR FRANCE",
        "Dest": "CDG",
        "AirlineCode": "AF"
    },
    {
        "InterviewId": "4908",
        "InterviewEndDate": "2023-11-28",
        "InterviewState": "Complete",
        "Flight": "AF - AIR FRANCE",
        "Dest": "CDG",
        "AirlineCode": "AF"
    },
    {
        "InterviewId": "4909",
        "InterviewEndDate": "2023-11-28",
        "InterviewState": "Complete",
        "Flight": "AF - AIR FRANCE",
        "Dest": "CDG",
        "AirlineCode": "AF"
    },
    {
        "InterviewId": "4910",
        "InterviewEndDate": "2023-11-28",
        "InterviewState": "Complete",
        "Flight": "AF - AIR FRANCE",
        "Dest": "CDG",
        "AirlineCode": "AF"
    },
    {
        "InterviewId": "4911",
        "InterviewEndDate": "2023-11-28",
        "InterviewState": "Complete",
        "Flight": "AF - AIR FRANCE",
        "Dest": "CDG",
        "AirlineCode": "AF"
    },
    {
        "InterviewId": "4912",
        "InterviewEndDate": "2023-12-03",
        "InterviewState": "Complete",
        "Flight": "AF - AIR FRANCE",
        "Dest": "CDG",
        "AirlineCode": "AF"
    },
    {
        "InterviewId": "4913",
        "InterviewEndDate": "2023-11-28",
        "InterviewState": "Complete",
        "Flight": "AF - AIR FRANCE",
        "Dest": "CDG",
        "AirlineCode": "AF"
    },
    {
        "InterviewId": "4914",
        "InterviewEndDate": "2023-11-28",
        "InterviewState": "Complete",
        "Flight": "AF - AIR FRANCE",
        "Dest": "CDG",
        "AirlineCode": "AF"
    },
    {
        "InterviewId": "4921",
        "InterviewEndDate": "2023-12-03",
        "InterviewState": "Complete",
        "Flight": "SK - Scandinavian Airlines System (SAS)",
        "Dest": "OSL",
        "AirlineCode": "SK"
    },
    {
        "InterviewId": "4922",
        "InterviewEndDate": "2023-12-03",
        "InterviewState": "Complete",
        "Flight": "SK - Scandinavian Airlines System (SAS)",
        "Dest": "OSL",
        "AirlineCode": "SK"
    },
    {
        "InterviewId": "4923",
        "InterviewEndDate": "2023-12-03",
        "InterviewState": "Complete",
        "Flight": "SK - Scandinavian Airlines System (SAS)",
        "Dest": "OSL",
        "AirlineCode": "SK"
    },
    {
        "InterviewId": "4924",
        "InterviewEndDate": "2023-12-03",
        "InterviewState": "Complete",
        "Flight": "SK - Scandinavian Airlines System (SAS)",
        "Dest": "OSL",
        "AirlineCode": "SK"
    },
    {
        "InterviewId": "4925",
        "InterviewEndDate": "2023-12-03",
        "InterviewState": "Complete",
        "Flight": "SK - Scandinavian Airlines System (SAS)",
        "Dest": "OSL",
        "AirlineCode": "SK"
    },
    {
        "InterviewId": "4926",
        "InterviewEndDate": "2023-12-03",
        "InterviewState": "Complete",
        "Flight": "SK - Scandinavian Airlines System (SAS)",
        "Dest": "OSL",
        "AirlineCode": "SK"
    },
    {
        "InterviewId": "4927",
        "InterviewEndDate": "2023-12-03",
        "InterviewState": "Complete",
        "Flight": "SK - Scandinavian Airlines System (SAS)",
        "Dest": "OSL",
        "AirlineCode": "SK"
    },
    {
        "InterviewId": "4928",
        "InterviewEndDate": "2023-12-03",
        "InterviewState": "Complete",
        "Flight": "SK - Scandinavian Airlines System (SAS)",
        "Dest": "OSL",
        "AirlineCode": "SK"
    },
    {
        "InterviewId": "4929",
        "InterviewEndDate": "2023-12-03",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "VIE",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "4933",
        "InterviewEndDate": "2023-12-03",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "VIE",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "4939",
        "InterviewEndDate": "2023-12-03",
        "InterviewState": "Complete",
        "Flight": "LO - LOT",
        "Dest": "WAW",
        "AirlineCode": "LO"
    },
    {
        "InterviewId": "4941",
        "InterviewEndDate": "2023-12-03",
        "InterviewState": "Complete",
        "Flight": "LO - LOT",
        "Dest": "WAW",
        "AirlineCode": "LO"
    },
    {
        "InterviewId": "4942",
        "InterviewEndDate": "2023-12-03",
        "InterviewState": "Complete",
        "Flight": "LO - LOT",
        "Dest": "WAW",
        "AirlineCode": "LO"
    },
    {
        "InterviewId": "4943",
        "InterviewEndDate": "2023-12-03",
        "InterviewState": "Complete",
        "Flight": "LO - LOT",
        "Dest": "WAW",
        "AirlineCode": "LO"
    },
    {
        "InterviewId": "4944",
        "InterviewEndDate": "2023-12-03",
        "InterviewState": "Complete",
        "Flight": "LO - LOT",
        "Dest": "WAW",
        "AirlineCode": "LO"
    },
    {
        "InterviewId": "4946",
        "InterviewEndDate": "2023-12-03",
        "InterviewState": "Complete",
        "Flight": "JTD - Jettime",
        "Dest": "LPA",
        "AirlineCode": "JTD"
    },
    {
        "InterviewId": "4947",
        "InterviewEndDate": "2023-12-03",
        "InterviewState": "Complete",
        "Flight": "JTD - Jettime",
        "Dest": "LPA",
        "AirlineCode": "JTD"
    },
    {
        "InterviewId": "4951",
        "InterviewEndDate": "2023-12-03",
        "InterviewState": "Complete",
        "Flight": "JTD - Jettime",
        "Dest": "LPA",
        "AirlineCode": "JTD"
    },
    {
        "InterviewId": "4952",
        "InterviewEndDate": "2023-12-03",
        "InterviewState": "Complete",
        "Flight": "JTD - Jettime",
        "Dest": "LPA",
        "AirlineCode": "JTD"
    },
    {
        "InterviewId": "4953",
        "InterviewEndDate": "2023-12-03",
        "InterviewState": "Complete",
        "Flight": "JTD - Jettime",
        "Dest": "LPA",
        "AirlineCode": "JTD"
    },
    {
        "InterviewId": "4954",
        "InterviewEndDate": "2023-12-03",
        "InterviewState": "Complete",
        "Flight": "JTD - Jettime",
        "Dest": "TFS",
        "AirlineCode": "JTD"
    },
    {
        "InterviewId": "4955",
        "InterviewEndDate": "2023-12-03",
        "InterviewState": "Complete",
        "Flight": "JTD - Jettime",
        "Dest": "TFS",
        "AirlineCode": "JTD"
    },
    {
        "InterviewId": "4956",
        "InterviewEndDate": "2023-12-03",
        "InterviewState": "Complete",
        "Flight": "JTD - Jettime",
        "Dest": "TFS",
        "AirlineCode": "JTD"
    },
    {
        "InterviewId": "4957",
        "InterviewEndDate": "2023-12-03",
        "InterviewState": "Complete",
        "Flight": "JTD - Jettime",
        "Dest": "TFS",
        "AirlineCode": "JTD"
    },
    {
        "InterviewId": "4958",
        "InterviewEndDate": "2023-12-03",
        "InterviewState": "Complete",
        "Flight": "JTD - Jettime",
        "Dest": "TFS",
        "AirlineCode": "JTD"
    },
    {
        "InterviewId": "4959",
        "InterviewEndDate": "2023-12-03",
        "InterviewState": "Complete",
        "Flight": "JTD - Jettime",
        "Dest": "TFS",
        "AirlineCode": "JTD"
    },
    {
        "InterviewId": "4960",
        "InterviewEndDate": "2023-12-03",
        "InterviewState": "Complete",
        "Flight": "JTD - Jettime",
        "Dest": "TFS",
        "AirlineCode": "JTD"
    },
    {
        "InterviewId": "4961",
        "InterviewEndDate": "2023-12-03",
        "InterviewState": "Complete",
        "Flight": "JTD - Jettime",
        "Dest": "TFS",
        "AirlineCode": "JTD"
    },
    {
        "InterviewId": "4963",
        "InterviewEndDate": "2023-12-04",
        "InterviewState": "Complete",
        "Flight": "SK - Scandinavian Airlines System (SAS)",
        "Dest": "OSL",
        "AirlineCode": "SK"
    },
    {
        "InterviewId": "4964",
        "InterviewEndDate": "2023-12-04",
        "InterviewState": "Complete",
        "Flight": "SK - Scandinavian Airlines System (SAS)",
        "Dest": "OSL",
        "AirlineCode": "SK"
    },
    {
        "InterviewId": "4989",
        "InterviewEndDate": "2023-12-15",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "MUC",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "4993",
        "InterviewEndDate": "2023-12-16",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "STN",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "4994",
        "InterviewEndDate": "2023-12-16",
        "InterviewState": "Complete",
        "Flight": "Rayanaiy",
        "Dest": "STN",
        "AirlineCode": "Rayanaiy"
    },
    {
        "InterviewId": "5000",
        "InterviewEndDate": "2023-12-18",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "MUC",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5002",
        "InterviewEndDate": "2023-12-18",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "MUC",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5003",
        "InterviewEndDate": "2023-12-18",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "MUC",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5006",
        "InterviewEndDate": "2023-12-18",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "MUC",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5007",
        "InterviewEndDate": "2023-12-18",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "MUC",
        "AirlineCode": "LH"
    }
]    

 `;
let interview_data_arr_raw = `[
    {
        "InterviewId": "5459",
        "InterviewEndDate": "2023-04-08 11:33:38",
        "InterviewState": "Complete",
        "Flight": "EK - Emirates",
        "Dest": "DXB",
        "AirlineCode": "EK",
        "download_time": "13-04-2023 23:27:39"
    },
    {
        "InterviewId": "5460",
        "InterviewEndDate": "2023-04-08 13:26:47",
        "InterviewState": "Complete",
        "Flight": "EZY",
        "Dest": "EDI",
        "AirlineCode": "EZY"
    },
    {
        "InterviewId": "5461",
        "InterviewEndDate": "2023-04-08 13:25:17",
        "InterviewState": "Complete",
        "Flight": "EZY",
        "Dest": "EDI",
        "AirlineCode": "EZY"
    },
    {
        "InterviewId": "5462",
        "InterviewEndDate": "2023-04-08 11:55:26",
        "InterviewState": "Complete",
        "Flight": "EK - Emirates",
        "Dest": "DXB",
        "AirlineCode": "EK"
    },
    {
        "InterviewId": "5463",
        "InterviewEndDate": "2023-04-08 11:44:14",
        "InterviewState": "Complete",
        "Flight": "EK - Emirates",
        "Dest": "DXB",
        "AirlineCode": "EK"
    },
    {
        "InterviewId": "5464",
        "InterviewEndDate": "2023-04-08 11:59:59",
        "InterviewState": "Complete",
        "Flight": "EK - Emirates",
        "Dest": "DXB",
        "AirlineCode": "EK"
    },
    {
        "InterviewId": "5465",
        "InterviewEndDate": "2023-04-08 12:10:46",
        "InterviewState": "Complete",
        "Flight": "EK - Emirates",
        "Dest": "DXB",
        "AirlineCode": "EK"
    },
    {
        "InterviewId": "5466",
        "InterviewEndDate": "2023-04-08 12:06:46",
        "InterviewState": "Complete",
        "Flight": "EK - Emirates",
        "Dest": "DXB",
        "AirlineCode": "EK"
    },
    {
        "InterviewId": "5467",
        "InterviewEndDate": "2023-04-08 12:13:47",
        "InterviewState": "Complete",
        "Flight": "EK - Emirates",
        "Dest": "DXB",
        "AirlineCode": "EK"
    },
    {
        "InterviewId": "5468",
        "InterviewEndDate": "2023-04-08 12:15:54",
        "InterviewState": "Complete",
        "Flight": "EK - Emirates",
        "Dest": "DXB",
        "AirlineCode": "EK"
    },
    {
        "InterviewId": "5469",
        "InterviewEndDate": "2023-04-08 12:26:38",
        "InterviewState": "Complete",
        "Flight": "TK - Turkish Airlines",
        "Dest": "IST",
        "AirlineCode": "TK"
    },
    {
        "InterviewId": "5470",
        "InterviewEndDate": "2023-04-08 12:25:53",
        "InterviewState": "Complete",
        "Flight": "EK - Emirates",
        "Dest": "DXB",
        "AirlineCode": "EK"
    },
    {
        "InterviewId": "5471",
        "InterviewEndDate": "2023-04-08 12:28:52",
        "InterviewState": "Complete",
        "Flight": "TK - Turkish Airlines",
        "Dest": "IST",
        "AirlineCode": "TK"
    },
    {
        "InterviewId": "5472",
        "InterviewEndDate": "2023-04-08 13:32:17",
        "InterviewState": "Complete",
        "Flight": "EZY",
        "Dest": "EDI",
        "AirlineCode": "EZY"
    },
    {
        "InterviewId": "5473",
        "InterviewEndDate": "2023-04-08 13:39:44",
        "InterviewState": "Complete",
        "Flight": "EZY",
        "Dest": "EDI",
        "AirlineCode": "EZY"
    },
    {
        "InterviewId": "5474",
        "InterviewEndDate": "2023-04-08 13:43:43",
        "InterviewState": "Complete",
        "Flight": "EZY",
        "Dest": "EDI",
        "AirlineCode": "EZY"
    },
    {
        "InterviewId": "5475",
        "InterviewEndDate": "2023-04-08 14:02:31",
        "InterviewState": "Complete",
        "Flight": "PC - Pegasus Airlines",
        "Dest": "SAW",
        "AirlineCode": "PC"
    },
    {
        "InterviewId": "5476",
        "InterviewEndDate": "2023-04-08 13:49:49",
        "InterviewState": "Complete",
        "Flight": "PC - Pegasus Airlines",
        "Dest": "SAW",
        "AirlineCode": "PC"
    },
    {
        "InterviewId": "5477",
        "InterviewEndDate": "2023-04-08 13:54:09",
        "InterviewState": "Complete",
        "Flight": "PC - Pegasus Airlines",
        "Dest": "SAW",
        "AirlineCode": "PC"
    },
    {
        "InterviewId": "5478",
        "InterviewEndDate": "2023-04-08 14:12:20",
        "InterviewState": "Complete",
        "Flight": "BA - British Airways",
        "Dest": "LHR",
        "AirlineCode": "BA"
    },
    {
        "InterviewId": "5479",
        "InterviewEndDate": "2023-04-08 14:06:45",
        "InterviewState": "Complete",
        "Flight": "BA - British Airways",
        "Dest": "LHR",
        "AirlineCode": "BA"
    },
    {
        "InterviewId": "5480",
        "InterviewEndDate": "2023-04-09 13:36:38",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "BUD",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5481",
        "InterviewEndDate": "2023-04-09 13:54:25",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "DEN",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5482",
        "InterviewEndDate": "2023-04-09 14:25:02",
        "InterviewState": "Complete",
        "Flight": "SK - SAS-Scandinavian Airlines System",
        "Dest": "CPH",
        "AirlineCode": "SK"
    },
    {
        "InterviewId": "5483",
        "InterviewEndDate": "2023-04-09 14:48:52",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "FRA",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5484",
        "InterviewEndDate": "2023-04-09 14:57:27",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "LHR",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5485",
        "InterviewEndDate": "2023-04-09 15:32:34",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "FRA",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5486",
        "InterviewEndDate": "2023-04-11 18:03:21",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "DUS",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5487",
        "InterviewEndDate": "2023-04-11 18:07:04",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "DUS",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5488",
        "InterviewEndDate": "2023-04-11 18:09:53",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "DUS",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5489",
        "InterviewEndDate": "2023-04-11 18:18:45",
        "InterviewState": "Complete",
        "Flight": "EN - AirDolomiti",
        "Dest": "MXP",
        "AirlineCode": "EN"
    },
    {
        "InterviewId": "5490",
        "InterviewEndDate": "2023-04-11 18:19:36",
        "InterviewState": "Complete",
        "Flight": "EN - AirDolomiti",
        "Dest": "MXP",
        "AirlineCode": "EN"
    },
    {
        "InterviewId": "5491",
        "InterviewEndDate": "2023-04-11 18:22:48",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "FAO",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5492",
        "InterviewEndDate": "2023-04-11 18:47:14",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "FAO",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5493",
        "InterviewEndDate": "2023-04-11 18:54:49",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "FAO",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5494",
        "InterviewEndDate": "2023-04-11 18:58:14",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "FAO",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5495",
        "InterviewEndDate": "2023-04-11 19:00:24",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "FRA",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5496",
        "InterviewEndDate": "2023-04-11 19:02:49",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "FRA",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5497",
        "InterviewEndDate": "2023-04-11 19:23:22",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "BHX",
        "AirlineCode": "LH"
    }
]    

 `;
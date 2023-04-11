let interview_data_raw = `[
    {
        "InterviewId": "67209",
        "InterviewEndDate": "2023-04-01 10:06:37",
        "InterviewState": "Complete",
        "Flight": "RUH (Riyadh King Khalid International - Saudi Arabia)",
        "Dest": "W6 2297",
        "AirlineCode": "RUH",
        "download_time": "11-04-2023 03:30:23"
    },
    {
        "InterviewId": "67210",
        "InterviewEndDate": "2023-04-01 10:08:55",
        "InterviewState": "Complete",
        "Flight": "RUH (Riyadh King Khalid International - Saudi Arabia)",
        "Dest": "W6 2297",
        "AirlineCode": "RUH"
    },
    {
        "InterviewId": "67211",
        "InterviewEndDate": "2023-04-01 10:08:25",
        "InterviewState": "Complete",
        "Flight": "RUH (Riyadh King Khalid International - Saudi Arabia)",
        "Dest": "W6 2297",
        "AirlineCode": "RUH"
    },
    {
        "InterviewId": "67212",
        "InterviewEndDate": "2023-04-01 10:10:29",
        "InterviewState": "Complete",
        "Flight": "RUH (Riyadh King Khalid International - Saudi Arabia)",
        "Dest": "W6 2297",
        "AirlineCode": "RUH"
    },
    {
        "InterviewId": "67213",
        "InterviewEndDate": "2023-04-01 10:16:52",
        "InterviewState": "Complete",
        "Flight": "RUH (Riyadh King Khalid International - Saudi Arabia)",
        "Dest": "W6 2297",
        "AirlineCode": "RUH"
    },
    {
        "InterviewId": "67214",
        "InterviewEndDate": "2023-04-01 10:11:37",
        "InterviewState": "Complete",
        "Flight": "RUH (Riyadh King Khalid International - Saudi Arabia)",
        "Dest": "W6 2297",
        "AirlineCode": "RUH"
    },
    {
        "InterviewId": "67215",
        "InterviewEndDate": "2023-04-01 10:16:28",
        "InterviewState": "Complete",
        "Flight": "RUH (Riyadh King Khalid International - Saudi Arabia)",
        "Dest": "W6 2297",
        "AirlineCode": "RUH"
    },
    {
        "InterviewId": "67216",
        "InterviewEndDate": "2023-04-01 10:17:29",
        "InterviewState": "Complete",
        "Flight": "RUH (Riyadh King Khalid International - Saudi Arabia)",
        "Dest": "W6 2297",
        "AirlineCode": "RUH"
    },
    {
        "InterviewId": "67217",
        "InterviewEndDate": "2023-04-01 10:23:15",
        "InterviewState": "Complete",
        "Flight": "RUH (Riyadh King Khalid International - Saudi Arabia)",
        "Dest": "W6 2297",
        "AirlineCode": "RUH"
    },
    {
        "InterviewId": "67218",
        "InterviewEndDate": "2023-04-01 10:15:47",
        "InterviewState": "Complete",
        "Flight": "RUH (Riyadh King Khalid International - Saudi Arabia)",
        "Dest": "W6 2297",
        "AirlineCode": "RUH"
    },
    {
        "InterviewId": "67219",
        "InterviewEndDate": "2023-04-01 10:21:15",
        "InterviewState": "Complete",
        "Flight": "RUH (Riyadh King Khalid International - Saudi Arabia)",
        "Dest": "W6 2297",
        "AirlineCode": "RUH"
    },
    {
        "InterviewId": "67220",
        "InterviewEndDate": "2023-04-01 10:27:30",
        "InterviewState": "Complete",
        "Flight": "RUH (Riyadh King Khalid International - Saudi Arabia)",
        "Dest": "W6 2297",
        "AirlineCode": "RUH"
    },
    {
        "InterviewId": "67221",
        "InterviewEndDate": "2023-04-01 10:31:33",
        "InterviewState": "Complete",
        "Flight": "RUH (Riyadh King Khalid International - Saudi Arabia)",
        "Dest": "W6 2297",
        "AirlineCode": "RUH"
    },
    {
        "InterviewId": "67222",
        "InterviewEndDate": "2023-04-01 10:22:40",
        "InterviewState": "Complete",
        "Flight": "RUH (Riyadh King Khalid International - Saudi Arabia)",
        "Dest": "W6 2297",
        "AirlineCode": "RUH"
    },
    {
        "InterviewId": "67223",
        "InterviewEndDate": "2023-04-01 10:27:07",
        "InterviewState": "Complete",
        "Flight": "RUH (Riyadh King Khalid International - Saudi Arabia)",
        "Dest": "W6 2297",
        "AirlineCode": "RUH"
    },
    {
        "InterviewId": "67224",
        "InterviewEndDate": "2023-04-01 10:34:03",
        "InterviewState": "Complete",
        "Flight": "RUH (Riyadh King Khalid International - Saudi Arabia)",
        "Dest": "W6 2297",
        "AirlineCode": "RUH"
    },
    {
        "InterviewId": "67225",
        "InterviewEndDate": "2023-04-01 10:31:29",
        "InterviewState": "Complete",
        "Flight": "RUH (Riyadh King Khalid International - Saudi Arabia)",
        "Dest": "W6 2297",
        "AirlineCode": "RUH"
    },
    {
        "InterviewId": "67226",
        "InterviewEndDate": "2023-04-01 10:33:16",
        "InterviewState": "Complete",
        "Flight": "RUH (Riyadh King Khalid International - Saudi Arabia)",
        "Dest": "W6 2297",
        "AirlineCode": "RUH"
    },
    {
        "InterviewId": "67227",
        "InterviewEndDate": "2023-04-01 10:33:42",
        "InterviewState": "Complete",
        "Flight": "RUH (Riyadh King Khalid International - Saudi Arabia)",
        "Dest": "W6 2297",
        "AirlineCode": "RUH"
    },
    {
        "InterviewId": "67228",
        "InterviewEndDate": "2023-04-01 10:36:31",
        "InterviewState": "Complete",
        "Flight": "RUH (Riyadh King Khalid International - Saudi Arabia)",
        "Dest": "W6 2297",
        "AirlineCode": "RUH"
    },
    {
        "InterviewId": "67229",
        "InterviewEndDate": "2023-04-01 10:37:53",
        "InterviewState": "Complete",
        "Flight": "RUH (Riyadh King Khalid International - Saudi Arabia)",
        "Dest": "W6 2297",
        "AirlineCode": "RUH"
    },
    {
        "InterviewId": "67230",
        "InterviewEndDate": "2023-04-01 10:52:28",
        "InterviewState": "Complete",
        "Flight": "IST (Istanbul Ataturk International - Turkey)",
        "Dest": "TK 1034",
        "AirlineCode": "IST"
    },
    {
        "InterviewId": "67231",
        "InterviewEndDate": "2023-04-01 10:53:55",
        "InterviewState": "Complete",
        "Flight": "IST (Istanbul Ataturk International - Turkey)",
        "Dest": "TK 1034",
        "AirlineCode": "IST"
    },
    {
        "InterviewId": "67232",
        "InterviewEndDate": "2023-04-01 10:53:37",
        "InterviewState": "Complete",
        "Flight": "IST (Istanbul Ataturk International - Turkey)",
        "Dest": "TK 1034",
        "AirlineCode": "IST"
    },
    {
        "InterviewId": "67233",
        "InterviewEndDate": "2023-04-01 10:54:33",
        "InterviewState": "Complete",
        "Flight": "IST (Istanbul Ataturk International - Turkey)",
        "Dest": "TK 1034",
        "AirlineCode": "IST"
    },
    {
        "InterviewId": "67234",
        "InterviewEndDate": "2023-04-01 10:54:13",
        "InterviewState": "Complete",
        "Flight": "IST (Istanbul Ataturk International - Turkey)",
        "Dest": "TK 1034",
        "AirlineCode": "IST"
    },
    {
        "InterviewId": "67235",
        "InterviewEndDate": "2023-04-01 11:07:35",
        "InterviewState": "Complete",
        "Flight": "IST (Istanbul Ataturk International - Turkey)",
        "Dest": "TK 1034",
        "AirlineCode": "IST"
    },
    {
        "InterviewId": "67236",
        "InterviewEndDate": "2023-04-01 11:23:56",
        "InterviewState": "Complete",
        "Flight": "IST (Istanbul Ataturk International - Turkey)",
        "Dest": "TK 1034",
        "AirlineCode": "IST"
    },
    {
        "InterviewId": "67237",
        "InterviewEndDate": "2023-04-01 11:04:04",
        "InterviewState": "Complete",
        "Flight": "IST (Istanbul Ataturk International - Turkey)",
        "Dest": "TK 1034",
        "AirlineCode": "IST"
    },
    {
        "InterviewId": "67238",
        "InterviewEndDate": "2023-04-01 11:19:08",
        "InterviewState": "Complete",
        "Flight": "IST (Istanbul Ataturk International - Turkey)",
        "Dest": "TK 1034",
        "AirlineCode": "IST"
    },
    {
        "InterviewId": "67239",
        "InterviewEndDate": "2023-04-01 11:20:58",
        "InterviewState": "Complete",
        "Flight": "IST (Istanbul Ataturk International - Turkey)",
        "Dest": "TK 1034",
        "AirlineCode": "IST"
    },
    {
        "InterviewId": "67240",
        "InterviewEndDate": "2023-04-01 11:23:34",
        "InterviewState": "Complete",
        "Flight": "IST (Istanbul Ataturk International - Turkey)",
        "Dest": "TK 1034",
        "AirlineCode": "IST"
    },
    {
        "InterviewId": "67241",
        "InterviewEndDate": "2023-04-01 11:23:39",
        "InterviewState": "Complete",
        "Flight": "IST (Istanbul Ataturk International - Turkey)",
        "Dest": "TK 1034",
        "AirlineCode": "IST"
    },
    {
        "InterviewId": "67242",
        "InterviewEndDate": "2023-04-01 11:25:17",
        "InterviewState": "Complete",
        "Flight": "IST (Istanbul Ataturk International - Turkey)",
        "Dest": "TK 1034",
        "AirlineCode": "IST"
    },
    {
        "InterviewId": "67243",
        "InterviewEndDate": "2023-04-01 11:27:04",
        "InterviewState": "Complete",
        "Flight": "IST (Istanbul Ataturk International - Turkey)",
        "Dest": "TK 1034",
        "AirlineCode": "IST"
    },
    {
        "InterviewId": "67244",
        "InterviewEndDate": "2023-04-01 11:29:25",
        "InterviewState": "Complete",
        "Flight": "IST (Istanbul Ataturk International - Turkey)",
        "Dest": "TK 1034",
        "AirlineCode": "IST"
    },
    {
        "InterviewId": "67245",
        "InterviewEndDate": "2023-04-01 11:29:25",
        "InterviewState": "Complete",
        "Flight": "IST (Istanbul Ataturk International - Turkey)",
        "Dest": "TK 1034",
        "AirlineCode": "IST"
    },
    {
        "InterviewId": "67246",
        "InterviewEndDate": "2023-04-01 11:47:01",
        "InterviewState": "Complete",
        "Flight": "RIX (Riga International - Latvia)",
        "Dest": "BT  492",
        "AirlineCode": "RIX"
    },
    {
        "InterviewId": "67247",
        "InterviewEndDate": "2023-04-01 11:48:01",
        "InterviewState": "Complete",
        "Flight": "RIX (Riga International - Latvia)",
        "Dest": "BT  492",
        "AirlineCode": "RIX"
    },
    {
        "InterviewId": "67248",
        "InterviewEndDate": "2023-04-01 11:49:48",
        "InterviewState": "Complete",
        "Flight": "RIX (Riga International - Latvia)",
        "Dest": "BT  492",
        "AirlineCode": "RIX"
    },
    {
        "InterviewId": "67249",
        "InterviewEndDate": "2023-04-01 11:49:47",
        "InterviewState": "Complete",
        "Flight": "RIX (Riga International - Latvia)",
        "Dest": "BT  492",
        "AirlineCode": "RIX"
    },
    {
        "InterviewId": "67250",
        "InterviewEndDate": "2023-04-01 11:45:42",
        "InterviewState": "Complete",
        "Flight": "RIX (Riga International - Latvia)",
        "Dest": "BT  492",
        "AirlineCode": "RIX"
    },
    {
        "InterviewId": "67251",
        "InterviewEndDate": "2023-04-01 11:56:56",
        "InterviewState": "Complete",
        "Flight": "RIX (Riga International - Latvia)",
        "Dest": "BT  492",
        "AirlineCode": "RIX"
    },
    {
        "InterviewId": "67252",
        "InterviewEndDate": "2023-04-01 11:52:08",
        "InterviewState": "Complete",
        "Flight": "RIX (Riga International - Latvia)",
        "Dest": "BT  492",
        "AirlineCode": "RIX"
    },
    {
        "InterviewId": "67253",
        "InterviewEndDate": "2023-04-01 11:53:44",
        "InterviewState": "Complete",
        "Flight": "RIX (Riga International - Latvia)",
        "Dest": "BT  492",
        "AirlineCode": "RIX"
    },
    {
        "InterviewId": "67254",
        "InterviewEndDate": "2023-04-01 11:58:02",
        "InterviewState": "Complete",
        "Flight": "RIX (Riga International - Latvia)",
        "Dest": "BT  492",
        "AirlineCode": "RIX"
    },
    {
        "InterviewId": "67255",
        "InterviewEndDate": "2023-04-01 12:01:08",
        "InterviewState": "Complete",
        "Flight": "RIX (Riga International - Latvia)",
        "Dest": "BT  492",
        "AirlineCode": "RIX"
    },
    {
        "InterviewId": "67256",
        "InterviewEndDate": "2023-04-01 12:01:08",
        "InterviewState": "Complete",
        "Flight": "RIX (Riga International - Latvia)",
        "Dest": "BT  492",
        "AirlineCode": "RIX"
    },
    {
        "InterviewId": "67257",
        "InterviewEndDate": "2023-04-01 12:08:06",
        "InterviewState": "Complete",
        "Flight": "RIX (Riga International - Latvia)",
        "Dest": "BT  492",
        "AirlineCode": "RIX"
    },
    {
        "InterviewId": "67258",
        "InterviewEndDate": "2023-04-01 12:04:18",
        "InterviewState": "Complete",
        "Flight": "RIX (Riga International - Latvia)",
        "Dest": "BT  492",
        "AirlineCode": "RIX"
    }
]    

 `;
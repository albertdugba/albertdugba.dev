client = ab8ac3d55d8347d19ef6e2a83cf518fb
secret = 515029fd9a6847a8ac1c6d52960ebd57


https://accounts.spotify.com/authorize?client_id=ab8ac3d55d8347d19ef6e2a83cf518fb&response_type=code&redirect_uri=http
%3A%2F%2Flocalhost:3000&scope=user-read-currently-playing


http://localhost:3000/?code=
http://localhost:3000/?code=

curl -H "Authorization: Basic YWI4YWMzZDU1ZDgzNDdkMTllZjZlMmE4M2NmNTE4ZmI6NTE1MDI5ZmQ5YTY4NDdhOGFjMWM2ZDUyOTYwZWJkNTc=" -d grant_type=authorization_code -d code=AQAZ6zgyGtvHD6VyG-WytOENlCUCXwVFg3xki5aSV6pUCy9Fy_VuZqdkE3ztdb7CTFfClYisEhHthCWPjVEDlK_5jzZLLhcnJNds4xt-iou4CzfKxdYVVyzBr7iC_t53xbEM1Pif0EuVd3SU5Z16cJHy4J6Qy_Qo52uLnGEsqmSXbW_0SYG4PEXOvI9ghWz-Ri5pmdZm#_=_ -d redirect_uri=http%3A%2F%2Flocalhost:3000 https://accounts.spotify.com/api/token

curl -H "Authorization: Basic YWI4YWMzZDU1ZDgzNDdkMTllZjZlMmE4M2NmNTE4ZmI6NTE1MDI5ZmQ5YTY4NDdhOGFjMWM2ZDUyOTYwZWJkNTc=" -d grant_type=authorization_code -d code=AQB5eSFw1n0SXXwEFnQ_zetLqmyZ5ubYIDn2jDuw_AyfbzZgiPP97fDNtyR6VccO34gpRj5sTQ4sOLVHV-rUDjx7QrpdfRtyrMiuLBwy0JTWp6FMEQKh15Gdm41fnB8l9z21do1Y6xmrwAvxpaP4XO9aTgLnahGM1MLgkwvE3aAOzP1FiBV6Vhg7mYwEtk_3WJ_d2L7BwfTRL2SJhlyFxgWxmRsm -d redirect_uri=http%3A%2F%2Flocalhost:3000 https://accounts.spotify.com/api/token


http://localhost:3000/?code=






{"access_token":"BQDGwWZH1xFrcXTYnD706VevBuXTPg6Rx9L_uN-88xO43gBonFfzMrOJXfwx4RuWDW5-S-JqBW1hUmAh95V7WcFAZIwsqbmNeKxqX6Sx58iZIVc1p_YyhnauHPcH04l6FLirvOpDjftQLUBNgW3h7s0DveXMZZUhDJScZcFtSJsDK3Hf","token_type":"Bearer","expires_in":3600,"refresh_token":"AQA2mkqu9S52z6u-sTKyqVqbrrVwGCXbkk4l30uElK-2XjgQlFxiXWn_oL3Ltnydtui7iLbCZKCLf-tKSf8l8BcxqoxeFFvZ-dY03uVSMZGypGzgHY36djk9BfO8yRDN6dI","scope":"user-read-currently-playing user-top-read"}
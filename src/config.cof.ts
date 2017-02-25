export class Config {
    connectionString: string ="Data Source=mia38747sql503.apps.tmrk.corp;Database=SDPBI_DW;Integrated Security=True;Connect Timeout=15;Encrypt=False;TrustServerCertificate=False";
    pidFile: string = "/var/run/waf/waf-management-api.pid";
    mongoUri: string = "mongodb://wafuser:1234@192.168.56.82:27017/waf";
    logFile: any = null;
    vzOAoauth:any = {
    	clientId:'3F1F6899-7E42-49BE-A54B-9776F0577E84',
    	clientSecret: '106DD468-F730-42F7-9256-F702820261DE',
    	accessTokenUri: 'http://mia38747oqw891.apps.tmrk.corp:3300/oauth2/token',
        accessTokenInfoUri: 'http://mia38747oqw891.apps.tmrk.corp:3300/oauth2/tokeninfo'
    };    
};
var requests = require('request');
var fs = require("fs");
var url = 'https://static.licdn.com/sc/h/1gfqnn92cueif28hscgdhlbq9,evrr1pox2293o9pfoalsrjt8h';

var cookie = {
    '__ssid':'523831f9-8b43-4666-b5df-9ca59749edbf',
    '_ga':'GA1.2.1959048830.1546100597',
    '_guid':'abb521e8-4f89-4585-880d-f762d794ce32',
    '_lipt':'CwEAAAFo6EL8Hfnn9M0QT88OfC0bnXC09otqBcstOROo2CcL_WnXtRX_BpLc2qXnPS7oG-L_JR7BPG4Ej8O9gswBLokuM0NBU3g1KMTsdueBVXYkBOKxLaOpxzFDJKLZQPENjGGvz4t1_Zhf7Bnm8KrAYDmQi3-mklBUxOgN7O2PmHhwmlpWPJcdFXyu4FkEYXQ6gLkW9NLBGLuEYem6u7myAoEXD4a6xOrbHIgTAmV8b1PRzg6Ohku7FTLSWsWMgfir_cys2VgKGzAMUJyDEpa5fZlW3zbSNdxqmrleHM0RKk32T5wRq10Ayf1KJtF35J3H7ZHH59wt9dcpoVP1QyD2GSZoQyvG5fPx-NgYknxt65hMu5IMcLZxdMm7LmLsrZrTwYU7NarWbzIac-7awg89VtbMLNTFDsVHTe2HpEuPfI0pljAb',
    'aam_uuid':'22039517114266601142640877368438434590',
    'AMCV_14215E3D5995C57C0A495C55@AdobeOrg':'-1303530583|MCIDTS|17941|MCMID|21868289637567500412623743454275360981|MCAAMLH-1550739036|3|MCAAMB-1550739036|RKhpRz8krg2tLO6pguXWp5olkAcUniQYPHaMWWgdJ3xzPWQmdj0y|MCOPTOUT-1550141436s|NONE|vVersion|3.3.0|MCCIDH|427676678',
    'AMCVS_14215E3D5995C57C0A495C55@AdobeOrg':'1',
    'bcookie':"v=2&b3982c8f-e3cd-49e1-849d-832e0ba4fab1",
    'bscookie':"v=1&20181221085044cb8fde11-1717-4daa-8d52-0460a8108cabAQG3_5Bml0zYgctaPCOI8Txv5MjAuxg2",
    'ELOQUA':'GUID=D7718EF9145A4D638ADAF4657AE47E54',
    'JSESSIONID':"ajax:1957877513172136590",
    'lang':'v=2&lang=en-US',
    'bcookie':"v=2&b3982c8f-e3cd-49e1-849d-832e0ba4fab1",
    'bscookie':"v=1&20181221085044cb8fde11-1717-4daa-8d52-0460a8108cabAQG3_5Bml0zYgctaPCOI8Txv5MjAuxg2",
    'ELOQUA':'GUID=D7718EF9145A4D638ADAF4657AE47E54',
    'JSESSIONID':"ajax:1957877513172136590",
    'lang':'v=2&lang=en-US',
    'li_at':'AQEDASChjCQDewLjAAABaOhIGkIAAAFpDFSeQlEAftLUg2ttOjbCpYB1d8Ta_YnHx9PelPMkJQ21NglOMfzw2OYSscyzv_8Lm71JkMPpMSuT-t8aLMmG0ikZsrnii3Kcw6wvdxF3QDdrZUh_mXdLehbb',
    'li_oatml':'AQFdTzO1_BhDUQAAAWiYx1zqoK1vTIki5pM5q_U8qvk16BXiqYuQec_gp_lQjhnap4Jexve68d-4gj2GORomK4gEUbKZkEx1',
    'liap':'true',
    'lidc':"b=SB84:g=32:u=242:i=1550158143:t=1550244543:s=AQFzwSBYDZ3M91voPWFKDpK-dOiSREwe",
    'lil-lang':'en_US',
    'org_tcphc':'true',
    'sl':"v=1&zuTM_",
    'UserMatchHistory':'AQJ--cETq8tf7wAAAWjMZqxqBSqemrZfs2RG1Rg1nB2W85KScct9t3GnXXSy9vCAtj8FxF1-MIcXVgzOWTY-2xb8eqdPxJxJ6UYTuFWqnkBLpj_jZamnb50uEGYVM6LgNpLhVQ',
    'utag_main':'v_id:01684d98dc2e0015dae1af066f8f000440024009008e2$_sn:47$_se:14$_ss:0$_st:1550137870303$vapi_domain:linkedin.com$ses_id:1550134233565;exp-session$_pn:3;exp-session',
    'visit':"v=1&M"
};

cookie = {
    'Accept': "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
    'Accept-Encoding': "gzip, deflate, br",
    'Accept-Language': "en-US,en;q=0.5",
    'Cache-Control': "max-age=0",
    'Connection': "keep-alive",
    'Cookie': 'UserMatchHistory=AQJ--cETq8tf7wAAAWjMZqxqBSqemrZfs2RG1Rg1nB2W85KScct9t3GnXXSy9vCAtj8FxF1-MIcXVgzOWTY-2xb8eqdPxJxJ6UYTuFWqnkBLpj_jZamnb50uEGYVM6LgNpLhVQ; bcookie="v=2&b3982c8f-e3cd-49e1-849d-832e0ba4fab1"; bscookie="v=1&20181221085044cb8fde11-1717-4daa-8d52-0460a8108cabAQG3_5Bml0zYgctaPCOI8Txv5MjAuxg2"; _ga=GA1.2.1959048830.1546100597; JSESSIONID="ajax:1957877513172136590"; _lipt=CwEAAAFo6EL8Hfnn9M0QT88OfC0bnXC09otqBcstOROo2CcL_WnXtRX_BpLc2qXnPS7oG-L_JR7BPG4Ej8O9gswBLokuM0NBU3g1KMTsdueBVXYkBOKxLaOpxzFDJKLZQPENjGGvz4t1_Zhf7Bnm8KrAYDmQi3-mklBUxOgN7O2PmHhwmlpWPJcdFXyu4FkEYXQ6gLkW9NLBGLuEYem6u7myAoEXD4a6xOrbHIgTAmV8b1PRzg6Ohku7FTLSWsWMgfir_cys2VgKGzAMUJyDEpa5fZlW3zbSNdxqmrleHM0RKk32T5wRq10Ayf1KJtF35J3H7ZHH59wt9dcpoVP1QyD2GSZoQyvG5fPx-NgYknxt65hMu5IMcLZxdMm7LmLsrZrTwYU7NarWbzIac-7awg89VtbMLNTFDsVHTe2HpEuPfI0pljAb; _guid=abb521e8-4f89-4585-880d-f762d794ce32; org_tcphc=true; visit="v=1&M"; utag_main=v_id:01684d98dc2e0015dae1af066f8f000440024009008e2$_sn:47$_se:12$_ss:0$_st:1550136213195$vapi_domain:linkedin.com$ses_id:1550134233565%3Bexp-session$_pn:2%3Bexp-session; AMCV_14215E3D5995C57C0A495C55%40AdobeOrg=-1303530583%7CMCIDTS%7C17941%7CMCMID%7C21868289637567500412623743454275360981%7CMCAAMLH-1550739036%7C3%7CMCAAMB-1550739036%7CRKhpRz8krg2tLO6pguXWp5olkAcUniQYPHaMWWgdJ3xzPWQmdj0y%7CMCOPTOUT-1550141436s%7CNONE%7CvVersion%7C3.3.0%7CMCCIDH%7C427676678; aam_uuid=22039517114266601142640877368438434590; ELOQUA=GUID=D7718EF9145A4D638ADAF4657AE47E54; __ssid=523831f9-8b43-4666-b5df-9ca59749edbf; li_oatml=AQFdTzO1_BhDUQAAAWiYx1zqoK1vTIki5pM5q_U8qvk16BXiqYuQec_gp_lQjhnap4Jexve68d-4gj2GORomK4gEUbKZkEx1; sl="v=1&zuTM_"; liap=true; li_at=AQEDASChjCQDewLjAAABaOhIGkIAAAFpDFSeQlEAftLUg2ttOjbCpYB1d8Ta_YnHx9PelPMkJQ21NglOMfzw2OYSscyzv_8Lm71JkMPpMSuT-t8aLMmG0ikZsrnii3Kcw6wvdxF3QDdrZUh_mXdLehbb; lil-lang=en_US; AMCVS_14215E3D5995C57C0A495C55%40AdobeOrg=1; lang=v=2&lang=en-US; lidc="b=OB84:g=1160:u=241:i=1550135474:t=1550221874:s=AQH9E360vxSfgsa31JDM84-ALfyI3Gjx"',
    'Host': "www.linkedin.com",
    'TE': "Trailers",
    'Upgrade-Insecure-Requests': "1",
    'User-Agent': "Mozilla/5.0 (X11; Linux x86_64; rv:65.0) Gecko/20100101 Firefox/65.0"
};

requests({
    url: url,
    method: "GET",
    Cookie: cookie,
    header: {
        'Host': "www.linkedin.com",
        'User-Agent': "Mozilla/5.0 (X11; Linux x86_64; rv:65.0) Gecko/20100101 Firefox/65.0",
        'Accept': "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
        'Accept-Language': "en-US,en;q=0.5",
        'Accept-Encoding': "gzip, deflate, br",
        'Connection': "keep-alive",
        'Cookie': 'UserMatchHistory=AQJ--cETq8tf7wAAAWjMZqxqBSqemrZfs2RG1Rg1nB2W85KScct9t3GnXXSy9vCAtj8FxF1-MIcXVgzOWTY-2xb8eqdPxJxJ6UYTuFWqnkBLpj_jZamnb50uEGYVM6LgNpLhVQ; bcookie="v=2&b3982c8f-e3cd-49e1-849d-832e0ba4fab1"; bscookie="v=1&20181221085044cb8fde11-1717-4daa-8d52-0460a8108cabAQG3_5Bml0zYgctaPCOI8Txv5MjAuxg2"; _ga=GA1.2.1959048830.1546100597; JSESSIONID="ajax:1957877513172136590"; _lipt=CwEAAAFo6EL8Hfnn9M0QT88OfC0bnXC09otqBcstOROo2CcL_WnXtRX_BpLc2qXnPS7oG-L_JR7BPG4Ej8O9gswBLokuM0NBU3g1KMTsdueBVXYkBOKxLaOpxzFDJKLZQPENjGGvz4t1_Zhf7Bnm8KrAYDmQi3-mklBUxOgN7O2PmHhwmlpWPJcdFXyu4FkEYXQ6gLkW9NLBGLuEYem6u7myAoEXD4a6xOrbHIgTAmV8b1PRzg6Ohku7FTLSWsWMgfir_cys2VgKGzAMUJyDEpa5fZlW3zbSNdxqmrleHM0RKk32T5wRq10Ayf1KJtF35J3H7ZHH59wt9dcpoVP1QyD2GSZoQyvG5fPx-NgYknxt65hMu5IMcLZxdMm7LmLsrZrTwYU7NarWbzIac-7awg89VtbMLNTFDsVHTe2HpEuPfI0pljAb; _guid=abb521e8-4f89-4585-880d-f762d794ce32; org_tcphc=true; visit="v=1&M"; utag_main=v_id:01684d98dc2e0015dae1af066f8f000440024009008e2$_sn:47$_se:14$_ss:0$_st:1550137870303$vapi_domain:linkedin.com$ses_id:1550134233565%3Bexp-session$_pn:3%3Bexp-session; AMCV_14215E3D5995C57C0A495C55%40AdobeOrg=-1303530583%7CMCIDTS%7C17941%7CMCMID%7C21868289637567500412623743454275360981%7CMCAAMLH-1550739036%7C3%7CMCAAMB-1550739036%7CRKhpRz8krg2tLO6pguXWp5olkAcUniQYPHaMWWgdJ3xzPWQmdj0y%7CMCOPTOUT-1550141436s%7CNONE%7CvVersion%7C3.3.0%7CMCCIDH%7C427676678; aam_uuid=22039517114266601142640877368438434590; ELOQUA=GUID=D7718EF9145A4D638ADAF4657AE47E54; __ssid=523831f9-8b43-4666-b5df-9ca59749edbf; li_oatml=AQFdTzO1_BhDUQAAAWiYx1zqoK1vTIki5pM5q_U8qvk16BXiqYuQec_gp_lQjhnap4Jexve68d-4gj2GORomK4gEUbKZkEx1; sl="v=1&zuTM_"; liap=true; li_at=AQEDASChjCQDewLjAAABaOhIGkIAAAFpDFSeQlEAftLUg2ttOjbCpYB1d8Ta_YnHx9PelPMkJQ21NglOMfzw2OYSscyzv_8Lm71JkMPpMSuT-t8aLMmG0ikZsrnii3Kcw6wvdxF3QDdrZUh_mXdLehbb; lil-lang=en_US; AMCVS_14215E3D5995C57C0A495C55%40AdobeOrg=1; lang=v=2&lang=en-US; lidc="b=SB84:g=32:u=242:i=1550158143:t=1550244543:s=AQFzwSBYDZ3M91voPWFKDpK-dOiSREwe',
        'Upgrade-Insecure-Requests': '1',
        'Cache-Control': 'max-age=0',
        'TE': 'Trailers'
    }},
    function(err, res, body) {
        if(err) {
            console.log("error occured !");
            console.log(err);
        }else{
            console.log("no error, got response status as : "+res.statusCode);
            console.log(body);
            console.log('\n\n\n\n\n\n\n\n\n');
            console.log('response : \n');
            console.log(res);
            fs.writeFile("body.html",body,function(err, res){
                if(err){
                    console.log(err);
                }
            });
            fs.writeFile("response.html",res,function(err,res){
                if(err){
                    console.log(err);
                }
            });
            console.log("response wrote to file !");
        }
    }
);
import { Html, Head, Main, NextScript } from 'next/document'


export default function MyDocument() {
    return (
        <Html lang="ko">
            <Head>
                {/* <title>NSTV by NSU</title> */}
                {/* <meta http-equiv="Title" content="NSTV by NSU" /> */}
                <meta http-equiv="Author" content="가상현실학과 김건우" />
                <meta http-equiv="publisher" content="가상현실학과 김건우" />
                <meta http-equiv="Reply-To" content="kgw@geonwoo.dev" />
                <meta http-equiv="Email" content ="kgw@geonwoo.dev" />
                <meta http-equiv="imagetoolbar" content="no" />
                
                <meta
                    name="Description" 
                    content="남서울대학교 중앙동아리 NSTV 비공식 홈페이지입니다"
                    
                />
                <meta name="naver-site-verification" content="9d1443fb1057f203c1700299def47a5372dba06f" />
                <meta name="google-site-verification" content="EWXZFPOb-meLWq74XRx7YmCnF63dMKkGY0T1_hr5C2g" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                {/* <meta property="og:title" content={title || "NSTV by NSU"} />
                <meta property="og:type" content="website" />
                <meta property="og:url" content={url || "https://nstv.geonwoo.dev"} />
                <meta property="og:image" content={image} />
                <meta property="og:article:author" content="N.S.T.V" /> */}
                <meta name="keywords" content="NSTV"/>
                <meta name="keywords" content="남서울대학교, 남서울대, 남설대, 남대"/>
                <meta name="keywords" content="남서울대 동아리, 남서울대학교 동아리, 남서울대학교 중앙동아리"/>
                <meta name="keywords" content="총동아리 LINK"/>
                <meta name="keywords" content="중앙동아리"/>


            </Head>
    <body>
        <Main />
        <NextScript />
      </body>
        </Html>
        
    );
};

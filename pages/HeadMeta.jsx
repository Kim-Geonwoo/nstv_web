import Head from "next/head";

const HeadMeta = ({ title, description, url, image }) => {
  return (
    <Head>
      <title>{title || "씨엠프로스 공식 홈페이지"}</title>
      <meta
        name="description"
        content={
          description ||
          "일산국제컨벤션고등학교 미디어 동아리 씨엠프로스 공식홈페이지 입니다."
        }
      />
      <meta name="naver-site-verification" content="666e329eae1feaa150cc3430359630b0cec4c56a" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta property="og:title" content={title || "씨엠프로스 공식 홈페이지"} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url || "https://cmpros.live"} />
      <meta property="og:image" content={image} />
      <meta property="og:article:author" content="씨엠프로스 공식 홈페이지" />
    </Head>
  );
};

export default HeadMeta;

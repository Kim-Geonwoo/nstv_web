import Head from "next/head";

const HeadMeta = ({ title, description, url, image }) => {
  return (
    <Head>
      <title>{title || "NSTV by NSU"}</title>
      <meta
        name="description"
        content={
          description ||
          "남서울대학교 중앙동아리 NSTV 공식 홈페이지입니다."
        }
      />
      <meta name="naver-site-verification" content="9d1443fb1057f203c1700299def47a5372dba06f" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta property="og:title" content={title || "NSTV by NSU"} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url || "https://nstv.geonwoo.dev"} />
      <meta property="og:image" content={image} />
      <meta property="og:article:author" content="N.S.T.V" />
    </Head>
  );
};

export default HeadMeta;

import React from "react";

const Meta = (props: Props) => {
  const { title } = props;
  return (
    <head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />

      <link rel="stylesheet" href="static/css/bootstrap.css" />

      <link rel="stylesheet" href="static/css/font-awesome.css" />

      <link rel="stylesheet" href="static/css/elegant-fonts.css" />

      <link rel="stylesheet" href="static/css/themify-icons.css" />

      <link rel="stylesheet" href="static/css/swiper.css" />

      <link rel="stylesheet" href="static/css/style.css" />
    </head>
  );
};

type Props = {
  title: string;
};

export default Meta;

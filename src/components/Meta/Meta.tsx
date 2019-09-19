import React, { useState } from "react";

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

      <link rel="stylesheet" href="static/css/bootstrap.min.css" />

      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
      />

      <link rel="stylesheet" href="static/css/elegant-fonts.css" />

      <link rel="stylesheet" href="static/css/themify-icons.css" />

      <link rel="stylesheet" href="static/css/swiper.min.css" />

      <link rel="stylesheet" href="static/css/style.css" />
      <script type="text/javascript" src="static/js/jquery.js"></script>
      <script
        type="text/javascript"
        src="static/js/jquery.collapsible.min.js"
      ></script>
      <script type="text/javascript" src="static/js/swiper.min.js"></script>
      <script
        type="text/javascript"
        src="static/js/jquery.countdown.min.js"
      ></script>
      <script
        type="text/javascript"
        src="static/js/circle-progress.min.js"
      ></script>
      <script
        type="text/javascript"
        src="static/js/jquery.countTo.min.js"
      ></script>
      <script
        type="text/javascript"
        src="static/js/jquery.barfiller.js"
      ></script>
      <script type="text/javascript" src="static/js/custom.js"></script>
    </head>
  );
};

type Props = {
  title: string;
};

export default Meta;

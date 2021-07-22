function Main(props) {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <link
          rel="shortcut icon"
          type="image/png"
          href="img/SourceqQwik_Logo_G.png"
        />

        <link
          href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600&display=swap"
          rel="stylesheet"
        />
        <title>SourceQwik - On-Demand Manufacturing for Fashion Industry</title>
      </head>
      <body class = "font-raleway text-base font-medium text-gray-800 leading-loose bg-white" >{props.children}
      </body>
    </html>
  );
}

export default Main;

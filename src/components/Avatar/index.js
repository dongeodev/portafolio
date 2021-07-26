const Avatar = ({ img, userName, colors }) => {
  let acronym = "";
  if (userName) {
    let matches = userName.match(/\b(\w)/g); // ['J','S','O','N']
    acronym = matches.join("").toUpperCase().substring(0, 2); // JSON
  }

  return (
    <>
      <div>{img ? <img src={img} alt={acronym} /> : <p>{acronym}</p>}</div>
      <style jsx>{`
        div {
          width: 48px;
          height: 48px;
          background-color: ${colors.rose};
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 50%;
        }
        img {
          width: inherit;
          height: inherit;
          border-radius: 50%;
        }
        p {
          width: 48px;
          height: fit-content;
          font-size: 18px;
          font-weight: bold;
          font-stretch: normal;
          font-style: normal;
          line-height: normal;
          letter-spacing: 0.14px;
          text-align: center;
          color: ${colors.white};
        }
      `}</style>
    </>
  );
};

export default Avatar;

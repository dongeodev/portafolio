import React from "react";
import { colors } from "styles";

export const UList = () => {
  return (
    <>
      <ul>
        <li>
          <img src="/email.svg" alt="icon email" />
          <span>dongeodev@gmail.com</span>
        </li>
        <li>
          <a href="https://wa.link/t7pphx" target="_blank">
            <img src="/phone.svg" alt="icon phone" />
            <span>+57 314 487 74 07</span>
          </a>
        </li>
      </ul>
      <style jsx>{`
        li {
          display: flex;
          align-items: center;
          margin-bottom: 12px;
        }
        li > img,
        a > img {
          margin-right: 5px;
        }
        span {
          font-size: 1rem;
        }
        a {
          display: flex;
          align-items: center;
          text-decoration: none;
        }
        @media (min-width: 768px) {
          span {
            font-size: 1.2rem;
          }
        }
        @media (min-width: 1024px) {
          span {
            font-size: 1.6rem;
          }
        }
      `}</style>
      <style jsx>{`
        span {
          color: ${colors.white};
        }
      `}</style>
    </>
  );
};
export const ListItem = ({ text, link }) => {
  return (
    <>
      <ul>
        <li>
          <a href={link} target="_blank">
            <span>{text}</span>
          </a>
        </li>
      </ul>
      <style jsx>{`
        li {
          display: flex;
          height: 24px;
          align-items: center;
          margin-bottom: 12px;
        }
        li > img,
        a > img {
          margin-right: 5px;
        }
        span {
          font-size: 1rem;
        }
        a {
          display: flex;
          align-items: center;
          text-decoration: none;
        }
        @media (min-width: 768px) {
          span {
            font-size: 1.2rem;
          }
        }
        @media (min-width: 1024px) {
          span {
            font-size: 1.6rem;
          }
        }
      `}</style>
      <style jsx>{`
        span {
          color: ${colors.white};
        }
      `}</style>
    </>
  );
};

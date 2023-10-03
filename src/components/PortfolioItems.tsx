import React from "react";
import "./PortfolioItems.css";

import Button from "./Button";

interface PortfolioItemsProps {
  count: number;
}

export default class PortfolioItems extends React.Component<PortfolioItemsProps> {
  get_all(): {
    title: string;
    url: string;
    description: string;
    thumbnail: string;
  }[] {
    const items = [
      {
        title: "Sensity AI",
        url: "https://sensity.ai/",
        description: "Identity verification and fraud detection company",
        thumbnail: "portfolio-project-sensity.jpg",
      },
      {
        title: "Ultimate Poker Coaching",
        url: "https://ultimatepokercoaching.com/",
        description:
          "Online services connecting professional poker players with students worldwide",
        thumbnail: "portfolio-project-upc.jpg",
      },
      {
        title: "Blubito",
        url: "https://blubito.de/",
        description:
          "Nearshore outsourcing IT company based in Germany and Bulgaria",
        thumbnail: "portfolio-project-blubito.jpg",
      },
      {
        title: "Colin's Sash Windows",
        url: "https://colinssashwindows.co.uk/",
        description: "Sash windows and doors retailer based in the UK",
        thumbnail: "portfolio-project-csw.jpg",
      },
    ];

    return items;
  }

  render() {
    const items = this.get_all();

    return (
      <div className="portfolio__wrapper">
        <ul className="portfolio__box">
          {items.map((item, index) => (
            <a
              key={index}
              className="portfolio__item"
              href={item.url}
              style={{
                backgroundImage:
                  "url('/assets/img/portfolio/" + item.thumbnail + "')",
              }}
            >
              <li>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </li>
            </a>
          ))}
        </ul>
        <div className="portfolio__button">
          <Button
            href="#Contact"
            classes="btn-outline-dark"
            text="Explore more"
          />
        </div>
      </div>
    );
  }
}

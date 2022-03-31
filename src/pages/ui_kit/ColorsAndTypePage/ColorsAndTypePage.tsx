import React, { Children } from 'react';
import { Link, useParams } from 'react-router-dom';
import './colors-and-type.scss';

interface IId { id: string }

export default class ColorsAndTypePage extends React.Component {
  render(): React.ReactNode {
    return (
      <>
        <header className='header'>
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M23.9989 32.4712C23.2224 32.4712 22.5871 31.8359 22.5871 31.0594C22.5871 25.6241 18.14 21.177 12.7047 21.177C11.9283 21.177 11.293 20.5418 11.293 19.7653C11.293 18.9888 11.9283 18.3535 12.7047 18.3535C19.7283 18.3535 25.4106 24.0359 25.4106 31.0594C25.4106 31.8359 24.7753 32.4712 23.9989 32.4712Z" fill="#1F2041" fillOpacity="0.25" />
            <path d="M36.7068 19.7653C36.7068 20.5418 36.0715 21.177 35.295 21.177C31.9421 21.177 28.9421 22.8712 27.1774 25.4476C26.7892 24.4594 26.3303 23.5418 25.7656 22.6947C28.095 20.0123 31.5186 18.3535 35.295 18.3535C36.0715 18.3535 36.7068 18.9888 36.7068 19.7653Z" fill="#1F2041" fillOpacity="0.25" />
            <path d="M24 48C10.7647 48 0 37.2353 0 24C0 10.7647 10.7647 0 24 0C37.2353 0 48 10.7647 48 24C48 37.2353 37.2353 48 24 48ZM24 2.82353C12.3176 2.82353 2.82353 12.3176 2.82353 24C2.82353 35.6824 12.3176 45.1765 24 45.1765C35.6824 45.1765 45.1765 35.6824 45.1765 24C45.1765 12.3176 35.6824 2.82353 24 2.82353Z" fill="#1F2041" fillOpacity="0.25" />
          </svg>

          <ul style={{ display: 'flex', }}>
            <li style={{ marginRight: "10px" }}><Link to='/formelements'>formElements</Link></li>
            <li style={{ marginRight: "10px" }}><Link to="/cards">CardsUiKitPage</Link></li>
          </ul>
        </header>
        <main className='page'>
          <div className='colors-and-headlines'>
            <div className="colors-and-headlines__row">
              <ul className='colors-and-headlines__colors-list'>
                <li className='colors-and-headlines__colors-list-item'>
                  <div className='colors-and-headlines__colors-color dark-100'></div>
                  <div className='colors-and-headlines__colors-description'>
                    <p className='colors-and-headlines__colors-description-title'>
                      Dark Shade 100%
                    </p>
                    <p className='colors-and-headlines__colors-description-code'>
                      #1F2041
                    </p>
                  </div>
                </li>
                <li className='colors-and-headlines__colors-list-item'>
                  <div className='colors-and-headlines__colors-color dark-75'></div>
                  <div className='colors-and-headlines__colors-description'>
                    <p className='colors-and-headlines__colors-description-title'>
                      Dark Shade 75%
                    </p>
                    <p className='colors-and-headlines__colors-description-code'>
                      #1F2041
                    </p>
                  </div>
                </li>
                <li className='colors-and-headlines__colors-list-item'>
                  <div className='colors-and-headlines__colors-color dark-50'></div>
                  <div className='colors-and-headlines__colors-description'>
                    <p className='colors-and-headlines__colors-description-title'>
                      Dark Shade 50%
                    </p>
                    <p className='colors-and-headlines__colors-description-code'>
                      #1F2041
                    </p>
                  </div>
                </li>
                <li className='colors-and-headlines__colors-list-item'>
                  <div className='colors-and-headlines__colors-color dark-25'></div>
                  <div className='colors-and-headlines__colors-description'>
                    <p className='colors-and-headlines__colors-description-title'>
                      Dark Shade 25%
                    </p>
                    <p className='colors-and-headlines__colors-description-code'>
                      #1F2041
                    </p>
                  </div>
                </li>
                <li className='colors-and-headlines__colors-list-item'>
                  <div className='colors-and-headlines__colors-color dark-5'></div>
                  <div className='colors-and-headlines__colors-description'>
                    <p className='colors-and-headlines__colors-description-title'>
                      Dark Shade 5%
                    </p>
                    <p className='colors-and-headlines__colors-description-code'>
                      #1F2041
                    </p>
                  </div>
                </li>
                <li className='colors-and-headlines__colors-list-item'>
                  <div className='colors-and-headlines__colors-color purple'></div>
                  <div className='colors-and-headlines__colors-description'>
                    <p className='colors-and-headlines__colors-description-title'>
                      Purple
                    </p>
                    <p className='colors-and-headlines__colors-description-code'>
                      #BC9CFF
                    </p>
                  </div>
                </li>
                <li className='colors-and-headlines__colors-list-item'>
                  <div className='colors-and-headlines__colors-color green'></div>
                  <div className='colors-and-headlines__colors-description'>
                    <p className='colors-and-headlines__colors-description-title'>
                      Green
                    </p>
                    <p className='colors-and-headlines__colors-description-code'>
                      #6FCF97
                    </p>
                  </div>
                </li>
              </ul>
              <ul className='colors-and-headlines__headlines-list'>
                <li className='colors-and-headlines__headlines-list-item'>
                  <p className='colors-and-headlines__headlines-list-item-symbol'>
                    H1
                  </p>
                  <p className='colors-and-headlines__headlines-list-item-description'>
                    This one is the sub-section or
                    widget title
                  </p>
                </li>
                <li className='colors-and-headlines__headlines-list-item'>
                  <p className='colors-and-headlines__headlines-list-item-symbol'>
                    H2
                  </p>
                  <p className='colors-and-headlines__headlines-list-item-description'>
                    Next one is the item title inside <span style={{ display: 'block' }}>widgets</span>
                  </p>
                </li>
                <li className='colors-and-headlines__headlines-list-item'>
                  <p className='colors-and-headlines__headlines-list-item-symbol'>
                    H3
                  </p>
                  <p className='colors-and-headlines__headlines-list-item-description'>
                    This is a label or CTA text
                  </p>
                </li>
                <li className='colors-and-headlines__headlines-list-item'>
                  <p className='colors-and-headlines__headlines-list-item-symbol'>
                    Body
                  </p>
                  <p className='colors-and-headlines__headlines-list-item-description'>
                    This is the body text which is used for most
                    <span style={{ display: 'block', }}>of the design, like paragraphs, lists, etc.</span>
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </main>
      </>
    );
  }
}
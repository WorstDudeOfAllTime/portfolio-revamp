import styles from './../styles/BioContact.module.css';
import Image from 'next/image';
import bioPic from './../components/img/bio.png';
const BioContact = () => {
  const fillColor = 'rgb(0, 0, 0)';
  return (
    <div className={`flexCent ${styles.contactContainer}`}>
      <div className={`flexCentCol ${styles.outterColumn}`}>
        <div
          className={`flexCentCol ${styles.contact}`}
          style={{
            'font-family': 'Goudy Old Style, sans-serif',
            fontWeight: '800',
          }}
        >
          <div className={`${styles.contactInfo}`}>
            <h3 className={styles.header}>Email:</h3>
            <h3>Krisbert@krisbert.dev</h3>
          </div>
          <div className={`${styles.contactInfo}`}>
            <h3 className={styles.header}>Phone:</h3>
            <h3>267-253-5763</h3>
          </div>
        </div>
        <div
          className={styles.bioContainer}
          style={{
            'font-family': 'Goudy Old Style, sans-serif',
            fontWeight: '800',
          }}
        >
          <p>
            Born and raised in Delaware County, I moved to the city of
            Philadelphia to study Computer Science in 2010. I crashed and burned
            and went on to work a ton of different jobs. Some I loved, some not
            so much, and though I gained a ton of life experience, I never found
            anything I was quite passionate about.
            <br />
            <br />I reapproached Web Development during the pandemic and was
            hooked. After several months of studying full time I joined a
            bootcamp. Now, roughly two years after starting I am working to make
            a career out of it.
          </p>
        </div>
      </div>

      <div className={`flexCentCol ${styles.innerColumn}`}>
        <div className={styles.elipImage}>
          <h1>I&apos;m Kris</h1>
          <h2
            style={{
              'font-family': 'Goudy Old Style, sans-serif',
              fontWeight: '800',
            }}
          >
            A full stack web developer with a passion for front end.
          </h2>
          <div className={`flexCent ${styles.socialBar}`}>
            <ul
              className={styles.socialList}
              style={{ listStyle: 'none', padding: '0px' }}
            >
              <li className={styles.listItem}>
                <a
                  href="https://github.com/WorstDudeOfAllTime"
                  target="_blank"
                  rel="noreferrer"
                  style={{ textDecoration: 'none', color: 'black' }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={styles.socialImg}
                    viewBox="-2 -2 24 24"
                    fill={fillColor}
                  >
                    <path d="M8.18 15.008c.12 0 .211-.004.271-.012a.317.317 0 0 0 .18-.107c.06-.063.09-.154.09-.274l-.004-.557c-.003-.355-.004-.637-.004-.844l-.188.033a2.41 2.41 0 0 1-.455.028 3.498 3.498 0 0 1-.57-.057 1.276 1.276 0 0 1-.548-.246 1.04 1.04 0 0 1-.36-.503l-.082-.189a2.046 2.046 0 0 0-.258-.417.989.989 0 0 0-.357-.312l-.057-.04a.602.602 0 0 1-.106-.1.455.455 0 0 1-.074-.114c-.016-.038-.003-.07.04-.094a.533.533 0 0 1 .238-.037l.164.025c.11.021.245.087.406.196.16.11.293.251.397.426.126.224.277.395.455.512a.964.964 0 0 0 .536.176c.18 0 .336-.013.467-.04a1.63 1.63 0 0 0 .369-.124c.049-.365.182-.647.4-.843a5.61 5.61 0 0 1-.839-.148 3.346 3.346 0 0 1-.77-.32 2.204 2.204 0 0 1-.66-.548c-.174-.219-.317-.505-.43-.86a4.09 4.09 0 0 1-.167-1.229c0-.66.216-1.223.647-1.687-.202-.497-.183-1.054.057-1.671.159-.05.394-.013.705.11.311.123.54.228.684.316.145.087.26.16.348.22a5.814 5.814 0 0 1 1.573-.212c.54 0 1.065.07 1.573.213l.31-.197c.214-.13.465-.251.754-.36.29-.11.511-.14.664-.09.246.617.268 1.174.065 1.67.432.465.648 1.027.648 1.688 0 .464-.056.875-.168 1.233-.112.358-.257.644-.434.86a2.29 2.29 0 0 1-.664.545 3.342 3.342 0 0 1-.77.32 5.605 5.605 0 0 1-.84.147c.284.245.426.633.426 1.163v1.957c0 .093.014.168.041.226a.226.226 0 0 0 .131.119c.06.021.114.035.16.04.047.006.113.009.2.009h-1.966-2.227z"></path>
                    <path d="M4 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H4zm0-2h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4z"></path>
                  </svg>
                </a>
              </li>
              <li className={styles.listItem}>
                <a
                  href="https://www.linkedin.com/in/kris-bertolino-b60b7a228/"
                  target="_blank"
                  rel="noreferrer"
                  style={{ textDecoration: 'none', color: 'black' }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={styles.socialImg}
                    viewBox="-2 -2 24 24"
                    fill={fillColor}
                  >
                    <path d="M15 11.13v3.697h-2.143v-3.45c0-.866-.31-1.457-1.086-1.457-.592 0-.945.398-1.1.784-.056.138-.071.33-.071.522v3.601H8.456s.029-5.842 0-6.447H10.6v.913l-.014.021h.014v-.02c.285-.44.793-1.066 1.932-1.066 1.41 0 2.468.922 2.468 2.902zM6.213 5.271C5.48 5.271 5 5.753 5 6.385c0 .62.466 1.115 1.185 1.115h.014c.748 0 1.213-.496 1.213-1.115-.014-.632-.465-1.114-1.199-1.114zm-1.086 9.556h2.144V8.38H5.127v6.447z"></path>
                    <path d="M4 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H4zm0-2h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4z"></path>
                  </svg>
                </a>
              </li>
              <li className={styles.listItem}>
                <a
                  href="https://twitter.com/WorstDudeOfAll"
                  target="_blank"
                  rel="noreferrer"
                  style={{ textDecoration: 'none', color: 'black' }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={styles.socialImg}
                    viewBox="-2 -2 24 24"
                    fill={fillColor}
                  >
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </a>
              </li>
              <li className={styles.listItem}>
                <a
                  href="https://www.youtube.com/user/HAVEstx/videos"
                  target="_blank"
                  rel="noreferrer"
                  style={{ textDecoration: 'none', color: 'black' }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={styles.socialImg}
                    viewBox="-2 -2 24 24"
                    fill={fillColor}
                  >
                    <path d="M12.923 6.526H7.077C5.93 6.526 5 7.446 5 8.58v2.89c0 1.135.93 2.054 2.077 2.054h5.846c1.147 0 2.077-.92 2.077-2.054V8.58c0-1.135-.93-2.054-2.077-2.054zm-1.404 3.64l-2.735 1.29a.11.11 0 0 1-.157-.099v-2.66a.11.11 0 0 1 .16-.097l2.734 1.37c.081.042.08.157-.002.196z"></path>
                    <path d="M4 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H4zm0-2h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4z"></path>
                  </svg>
                </a>
              </li>
              <li className={styles.listItem}>
                <a
                  href="https://dribbble.com/Worstdudeofalltime"
                  target="_blank"
                  rel="noreferrer"
                  style={{ textDecoration: 'none', color: 'black' }}
                >
                  <svg
                    className={styles.socialImg}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="-2 -2 24 24"
                    fill={fillColor}
                  >
                    <path d="M10,0 C4.4794,0 0,4.4794 0,10 C0,15.5206 4.4794,20 10,20 C15.50976,20 20,15.5206 20,10 C20,4.4794 15.50976,0 10,0 Z M16.6052,4.60954 C17.79826,6.0629 18.5141,7.91758 18.5358,9.92408 C18.2538,9.86984 15.43384,9.29502 12.5922,9.65292 C12.52712,9.51194 12.47288,9.36008 12.40782,9.20824 C12.23428,8.7961 12.03904,8.3731 11.84382,7.9718 C14.98916,6.69198 16.42082,4.84816 16.6052,4.60954 Z M10,1.475054 C12.1692,1.475054 14.15402,2.2885 15.6616,3.62256 C15.50976,3.83948 14.21908,5.564 11.18222,6.70282 C9.78308,4.13232 8.2321,2.0282 7.9935,1.70282 C8.6334,1.550976 9.30586,1.475054 10,1.475054 Z M6.3666,2.27766 C6.59436,2.58134 8.1128,4.69632 9.53362,7.21258 C5.5423,8.27548 2.01736,8.25383331 1.637744,8.25383331 C2.19088,5.60738 3.98048,3.40564 6.3666,2.27766 Z M1.453362,10.01084 C1.453362,9.92408 1.453362,9.83732 1.453362,9.75054 C1.822126,9.76138 5.9653,9.81562 10.22776,8.5358 C10.47722,9.01302 10.70498,9.50108 10.9219,9.98916 C10.81344,10.0217 10.69414,10.05424 10.58568,10.08676 C6.18222,11.5076 3.83948,15.39046 3.64426,15.71584 C2.2885,14.20824 1.453362,12.20174 1.453362,10.01084 Z M10,18.54664 C8.02604,18.54664 6.2039,17.87418 4.76138,16.7462 C4.91324,16.43168 6.6486,13.0911 11.4642,11.40998 C11.4859,11.39914 11.49674,11.39914 11.51844,11.38828 C12.72234,14.50108 13.21042,17.11496 13.34056,17.86334 C12.3102,18.30802 11.18222,18.54664 10,18.54664 Z M14.7614,17.08244 C14.67462,16.56182 14.2191,14.06724 13.10196,10.99784 C15.78092,10.57484 18.12364,11.26898 18.41648,11.3666 C18.04772,13.74186 16.68112,15.79176 14.7614,17.08244 Z"></path>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BioContact;

<div className={`$flexCentCol ${styles.picAndSoc}`}>
  <Image
    src={bioPic}
    style={{ height: '60vh', width: 'auto', margin: '0' }}
    className={styles.myPic}
  />
</div>;
/**
 * <div className={`flexCentCol ${styles.nameAndPhoto}`}>
        
        <div className={styles.bio}>
          <p style={{
            'font-family': 'Goudy Old Style, sans-serif',
            fontWeight: '800',
          }}>
          </p>
        </div>
      </div>
 */

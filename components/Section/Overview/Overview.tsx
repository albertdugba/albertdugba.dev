import { Container } from './styles';

const Overview = () => {
  return (
    <div style={{ background: '#EBE6F3' }}>
      <Container className="container">
        <div className="info">
          <div>
            <h1>Bio</h1>
          </div>
          <p>I am a self taught software engineer from Ghana.</p>
          <p>
            I have 2 years of experience building applications with frontend
            technologies. As a UI engineer, I thrive to work with the right
            tools to deliver fast, performant and accessiblity from the ground
            up.
          </p>

          <p>
            I work with tools and technologies like Reactjs, Nextjs, firebase,
            graphQL, typescript
          </p>
        </div>

        <div>
          <svg
            className="svg--container"
            width="523"
            height="348"
            viewBox="0 0 523 348"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <rect width="523" height="348" fill="#E5E5E5" />
            <g clipPath="url(#clip0)">
              <rect width="523" height="348" rx="7" fill="white" />
              <rect y="-4" width="523" height="34" fill="#EEE8F7" />
              <circle cx="19" cy="13" r="7" fill="#9A1515" />
              <circle cx="42" cy="13" r="7" fill="#FBF2A3" />
              <circle cx="68" cy="13" r="7" fill="#448E4C" />
              <rect
                x="28"
                y="59"
                width="42"
                height="35"
                rx="4"
                fill="#EBE6F7"
              />
              <rect
                x="26"
                y="133"
                width="42"
                height="35"
                rx="4"
                fill="#54417C"
              />
              <rect
                x="26"
                y="207"
                width="42"
                height="35"
                rx="4"
                fill="#ECE9F3"
              />
              <rect
                x="26"
                y="284"
                width="42"
                height="35"
                rx="4"
                fill="#54417C"
              />
              <rect
                x="75"
                y="59"
                width="309"
                height="8"
                rx="4"
                fill="#54417C"
              />
              <rect
                x="73"
                y="133"
                width="309"
                height="8"
                rx="4"
                fill="#54417C"
              />
              <rect
                x="73"
                y="207"
                width="309"
                height="8"
                rx="4"
                fill="#54417C"
              />
              <rect
                x="73"
                y="284"
                width="309"
                height="8"
                rx="4"
                fill="#54417C"
              />
              <rect
                x="75"
                y="72"
                width="309"
                height="8"
                rx="4"
                fill="#54417C"
              />
              <rect
                x="73"
                y="146"
                width="309"
                height="8"
                rx="4"
                fill="#54417C"
              />
              <rect
                x="73"
                y="220"
                width="309"
                height="8"
                rx="4"
                fill="#54417C"
              />
              <rect
                x="73"
                y="297"
                width="309"
                height="8"
                rx="4"
                fill="#54417C"
              />
              <rect x="75" y="86" width="70" height="8" rx="4" fill="#7E3180" />
              <rect
                x="73"
                y="160"
                width="70"
                height="8"
                rx="4"
                fill="#B8A7DE"
              />
              <rect
                x="73"
                y="234"
                width="70"
                height="8"
                rx="4"
                fill="#54417C"
              />
              <rect
                x="73"
                y="311"
                width="70"
                height="8"
                rx="4"
                fill="#D1C1F2"
              />
            </g>
            <defs>
              <clipPath id="clip0">
                <rect width="523" height="348" rx="7" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
      </Container>
    </div>
  );
};

export default Overview;

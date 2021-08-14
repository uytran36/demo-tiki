/* eslint-disable jsx-a11y/anchor-is-valid */
import { Menu, Dropdown, Row, Col } from "antd";
import Icon, { MenuOutlined, CaretDownOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const PhoneSvg = () => (
  <svg width="15px" height="15px" viewBox="0 0 35 35">
    <g>
      <path
        d="M25.302,0H9.698c-1.3,0-2.364,1.063-2.364,2.364v30.271C7.334,33.936,8.398,35,9.698,35h15.604
		c1.3,0,2.364-1.062,2.364-2.364V2.364C27.666,1.063,26.602,0,25.302,0z M15.004,1.704h4.992c0.158,0,0.286,0.128,0.286,0.287
		c0,0.158-0.128,0.286-0.286,0.286h-4.992c-0.158,0-0.286-0.128-0.286-0.286C14.718,1.832,14.846,1.704,15.004,1.704z M17.5,33.818
		c-0.653,0-1.182-0.529-1.182-1.183s0.529-1.182,1.182-1.182s1.182,0.528,1.182,1.182S18.153,33.818,17.5,33.818z M26.021,30.625
		H8.979V3.749h17.042V30.625z"
      />
    </g>
  </svg>
);
const TvSvg = () => (
  <svg width="15px" height="15px" viewBox="0 0 480 480">
    <g>
      <g>
        <path d="M480,368V64H0v304h184v32h-56v16h240v-16h-72v-32H480z M280,400h-80v-32h80V400z M16,352V80h448v272H16z" />
      </g>
    </g>
  </svg>
);
const HeadphonesSvg = () => (
  <svg
    viewBox="0 0 469.333 469.333"
    width="15px"
    height="15px"
    // style="enable-background:new 0 0 469.333 469.333;"
  >
    <g>
      <g>
        <g>
          <path
            d="M234.667,0C105.271,0,0,114.844,0,256v106.667c0,5.896,4.771,10.667,10.667,10.667s10.667-4.771,10.667-10.667V256
				c0-129.396,95.698-234.667,213.333-234.667S448,126.604,448,256v106.667c0,5.896,4.771,10.667,10.667,10.667
				c5.896,0,10.667-4.771,10.667-10.667V256C469.333,114.844,364.063,0,234.667,0z"
          />
          <path
            d="M117.333,256h-32c-23.531,0-42.667,19.135-42.667,42.667v128c0,23.531,19.135,42.667,42.667,42.667h32
				c5.896,0,10.667-4.771,10.667-10.667v-192C128,260.771,123.229,256,117.333,256z M106.667,448H85.333
				C73.573,448,64,438.427,64,426.667v-128c0-11.76,9.573-21.333,21.333-21.333h21.333V448z"
          />
          <path
            d="M384,256h-32c-5.896,0-10.667,4.771-10.667,10.667v192c0,5.896,4.771,10.667,10.667,10.667h32
				c23.531,0,42.667-19.135,42.667-42.667v-128C426.667,275.135,407.531,256,384,256z M405.333,426.667
				c0,11.76-9.573,21.333-21.333,21.333h-21.333V277.333H384c11.76,0,21.333,9.573,21.333,21.333V426.667z"
          />
        </g>
      </g>
    </g>
  </svg>
);
const LaptopSvg = () => (
  <svg
    viewBox="0 0 467.211 467.211"
    width="15px"
    height="15px"
    // enable-background="new 0 0 467.211 467.211"
  >
    <g>
      <path d="m413.917,96.775h-360.622c-6.369,0-11.551,5.181-11.551,11.55v213.182c0,6.369 5.182,11.55 11.551,11.55h360.622c6.368,0 11.55-5.181 11.55-11.55v-213.181c-5.68434e-14-6.369-5.182-11.551-11.55-11.551zm1.55,224.732c0,0.855-0.695,1.55-1.55,1.55h-360.622c-0.855,0-1.551-0.696-1.551-1.55v-213.181c0-0.855 0.695-1.55 1.551-1.55h360.622c0.854,0 1.55,0.696 1.55,1.55v213.181z" />
      <path d="m459.711,340.558h-11.744v-237.715c0-15.752-12.815-28.568-28.568-28.568h-371.586c-15.753,0-28.568,12.815-28.568,28.568v237.714h-11.745c-4.143,0-7.5,3.358-7.5,7.5v20.605c0,13.384 10.889,24.272 24.272,24.272h418.666c13.384,0 24.272-10.889 24.272-24.272v-20.605c0.001-4.141-3.356-7.499-7.499-7.499zm-425.467-237.715c-2.84217e-14-7.481 6.087-13.568 13.568-13.568h371.586c7.481,0 13.568,6.086 13.568,13.568v237.714h-398.722v-237.714zm177.361,252.715h44v3.922c0,1.755-1.428,3.184-3.184,3.184h-37.633c-1.756,0-3.184-1.428-3.184-3.184v-3.922zm240.607,13.105c0,5.113-4.159,9.272-9.272,9.272h-418.667c-5.113,0-9.272-4.16-9.272-9.272v-13.105h11.744 174.861v3.922c0,7.27 5.914,13.184 13.184,13.184h37.633c7.27,0 13.184-5.914 13.184-13.184v-3.922h174.861 11.744v13.105z" />
    </g>
  </svg>
);
const CameraSvg = () => (
  <svg
    viewBox="0 0 420.8 420.8"
    width="15px"
    height="15px"
    // style="enable-background:new 0 0 420.8 420.8;"
  >
    <g>
      <g>
        <g>
          <path
            d="M406.8,96.4c-8.4-8.8-20-14-33.2-14h-66.4v-0.8c0-10-4-19.6-10.8-26c-6.8-6.8-16-10.8-26-10.8h-120
				c-10.4,0-19.6,4-26.4,10.8c-6.8,6.8-10.8,16-10.8,26v0.8h-66c-13.2,0-24.8,5.2-33.2,14c-8.4,8.4-14,20.4-14,33.2v199.2
				C0,342,5.2,353.6,14,362c8.4,8.4,20.4,14,33.2,14h326.4c13.2,0,24.8-5.2,33.2-14c8.4-8.4,14-20.4,14-33.2V129.6
				C420.8,116.4,415.6,104.8,406.8,96.4z M400,328.8h-0.4c0,7.2-2.8,13.6-7.6,18.4s-11.2,7.6-18.4,7.6H47.2
				c-7.2,0-13.6-2.8-18.4-7.6c-4.8-4.8-7.6-11.2-7.6-18.4V129.6c0-7.2,2.8-13.6,7.6-18.4s11.2-7.6,18.4-7.6h77.2
				c6,0,10.8-4.8,10.8-10.8V81.2c0-4.4,1.6-8.4,4.4-11.2s6.8-4.4,11.2-4.4h119.6c4.4,0,8.4,1.6,11.2,4.4c2.8,2.8,4.4,6.8,4.4,11.2
				v11.6c0,6,4.8,10.8,10.8,10.8H374c7.2,0,13.6,2.8,18.4,7.6s7.6,11.2,7.6,18.4V328.8z"
          />
          <path
            d="M210.4,130.8c-27.2,0-52,11.2-69.6,28.8c-18,18-28.8,42.4-28.8,69.6s11.2,52,28.8,69.6c18,18,42.4,28.8,69.6,28.8
				s52-11.2,69.6-28.8c18-18,28.8-42.4,28.8-69.6s-11.2-52-28.8-69.6C262.4,142,237.6,130.8,210.4,130.8z M264.8,284
				c-14,13.6-33.2,22.4-54.4,22.4S170,297.6,156,284c-14-14-22.4-33.2-22.4-54.4c0-21.2,8.8-40.4,22.4-54.4
				c14-14,33.2-22.4,54.4-22.4s40.4,8.8,54.4,22.4c14,14,22.4,33.2,22.4,54.4C287.6,250.8,278.8,270,264.8,284z"
          />
          <circle cx="352.8" cy="150" r="19.6" />
        </g>
      </g>
    </g>
  </svg>
);
const WashingMachineSvg = () => (
  <svg width="15px" height="15px" viewBox="-43 0 512 512.00002">
    <path d="m384 0h-341.332031c-23.554688.0273438-42.6406252 19.113281-42.667969 42.667969v409.597656c0 14.140625 11.460938 25.601563 25.601562 25.601563v25.597656c0 4.714844 3.820313 8.535156 8.53125 8.535156h358.402344c4.710938 0 8.53125-3.820312 8.53125-8.535156v-25.597656c14.136719 0 25.601563-11.460938 25.601563-25.601563v-409.597656c-.03125-23.554688-19.113281-42.6406252-42.667969-42.667969zm-341.332031 17.066406h341.332031c14.136719 0 25.601562 11.460938 25.601562 25.601563v59.734375h-392.535156v-59.734375c0-14.140625 11.460938-25.601563 25.601563-25.601563zm341.332031 477.867188h-341.332031v-17.066406h341.332031zm17.066406-34.132813h-375.464844c-4.714843 0-8.535156-3.820312-8.535156-8.535156v-332.800781h392.535156v332.800781c0 4.714844-3.820312 8.535156-8.535156 8.535156zm0 0" />
    <path d="m42.667969 85.332031h102.398437c4.714844 0 8.535156-3.820312 8.535156-8.53125v-34.132812c0-4.714844-3.820312-8.535157-8.535156-8.535157h-102.398437c-4.714844 0-8.535157 3.820313-8.535157 8.535157v34.132812c0 4.710938 3.820313 8.53125 8.535157 8.53125zm8.53125-34.132812h85.335937v17.066406h-85.335937zm0 0" />
    <path d="m196.265625 85.332031c14.140625 0 25.601563-11.460937 25.601563-25.597656 0-14.140625-11.460938-25.601563-25.601563-25.601563-14.136719 0-25.597656 11.460938-25.597656 25.601563 0 14.136719 11.460937 25.597656 25.597656 25.597656zm0-34.132812c4.714844 0 8.535156 3.820312 8.535156 8.535156 0 4.710937-3.820312 8.53125-8.535156 8.53125-4.710937 0-8.53125-3.820313-8.53125-8.53125 0-4.714844 3.820313-8.535156 8.53125-8.535156zm0 0" />
    <path d="m264.53125 85.332031c14.140625 0 25.601562-11.460937 25.601562-25.597656 0-14.140625-11.460937-25.601563-25.601562-25.601563-14.136719 0-25.597656 11.460938-25.597656 25.601563 0 14.136719 11.460937 25.597656 25.597656 25.597656zm0-34.132812c4.714844 0 8.535156 3.820312 8.535156 8.535156 0 4.710937-3.820312 8.53125-8.535156 8.53125-4.710938 0-8.53125-3.820313-8.53125-8.53125 0-4.714844 3.820312-8.535156 8.53125-8.535156zm0 0" />
    <path d="m315.734375 68.265625h17.066406c4.710938 0 8.53125-3.820313 8.53125-8.53125 0-4.714844-3.820312-8.535156-8.53125-8.535156h-17.066406c-4.714844 0-8.535156 3.820312-8.535156 8.535156 0 4.710937 3.820312 8.53125 8.535156 8.53125zm0 0" />
    <path d="m366.933594 68.265625h17.066406c4.714844 0 8.535156-3.820313 8.535156-8.53125 0-4.714844-3.820312-8.535156-8.535156-8.535156h-17.066406c-4.714844 0-8.535156 3.820312-8.535156 8.535156 0 4.710937 3.820312 8.53125 8.535156 8.53125zm0 0" />
    <path d="m213.332031 153.601562c-75.402343 0-136.53125 61.125-136.53125 136.53125s61.128907 136.535157 136.53125 136.535157c75.40625 0 136.535157-61.128907 136.535157-136.535157-.089844-75.367187-61.164063-136.441406-136.535157-136.53125zm0 256c-65.976562 0-119.464843-53.488281-119.464843-119.46875 0-65.980468 53.488281-119.464843 119.464843-119.464843 65.980469 0 119.46875 53.484375 119.46875 119.464843-.070312 65.949219-53.515625 119.398438-119.46875 119.46875zm0 0" />
    <path d="m213.332031 179.199219c-61.203125-.058594-110.871093 49.507812-110.933593 110.710937-.011719 14.503906 2.820312 28.871094 8.339843 42.285156.050781.171876 0 .347657.066407.519532.070312.171875.230468.332031.316406.53125 23.765625 56.417968 88.769531 82.886718 145.1875 59.121094 31.570312-13.300782 55.214844-40.449219 64.058594-73.542969.046874-.140625.082031-.285157.109374-.429688 15.847657-58.9375-19.085937-119.5625-78.027343-135.40625-9.492188-2.550781-19.285157-3.828125-29.117188-3.789062zm0 17.066406c51.71875-.121094 93.746094 41.707031 93.867188 93.421875.015625 6.984375-.746094 13.945312-2.277344 20.753906-4.449219 1.472656-8.816406 3.183594-13.082031 5.121094-11.070313 5.746094-23.367188 8.730469-35.839844 8.703125-10.621094.285156-21.113281-2.375-30.320312-7.679687-11.585938-6.449219-24.6875-9.6875-37.945313-9.386719-21.675781.882812-43.109375 4.90625-63.625 11.945312-16.085937-49.21875 10.773437-102.15625 59.992187-118.238281 9.4375-3.085938 19.304688-4.652344 29.230469-4.640625zm0 187.734375c-34.398437-.023438-66.035156-18.851562-82.464843-49.074219 18.351562-6.246093 37.5-9.835937 56.867187-10.660156 10.621094-.28125 21.113281 2.375 30.316406 7.679687 11.589844 6.449219 24.691407 9.691407 37.949219 9.386719 14.332031.078125 28.484375-3.191406 41.328125-9.546875-15.816406 31.9375-48.355469 52.167969-83.996094 52.214844zm0 0" />
  </svg>
);
const PotSvg = () => (
  <svg
    viewBox="0 0 380.56 380.56"
    width="15px"
    height="15px"
    // style="enable-background:new 0 0 380.56 380.56;"
  >
    <g>
      <g>
        <path
          d="M214.96,69.96c2.011-3.855,3.081-8.132,3.12-12.48c0-15.464-12.536-28-28-28c-15.464,0-28,12.536-28,28
			c0.039,4.348,1.109,8.625,3.12,12.48c-66.88,3.36-128,20.48-128,50.32c-0.022,4.418,3.542,8.018,7.96,8.04
			c0.281,0.001,0.561-0.012,0.84-0.04h288.96c4.418,0,8-3.582,8-8C342.96,90.44,282.08,73.32,214.96,69.96z M190.48,45.56
			c6.539,0,11.84,5.301,11.84,11.84s-5.301,11.84-11.84,11.84s-11.84-5.301-11.84-11.84S183.941,45.56,190.48,45.56z M58.88,112.6
			c14.8-13.28,62.96-27.36,131.6-27.36v0.32c68.64,0,116.8,14.08,131.6,27.04H58.88z"
        />
      </g>
    </g>
    <g>
      <g>
        <path d="M74,166.84c-4.418,0-8,3.582-8,8v86c0,4.418,3.582,8,8,8s8-3.582,8-8v-86C82,170.422,78.418,166.84,74,166.84z" />
      </g>
    </g>
    <g>
      <g>
        <path
          d="M372.56,169h-29.6v-22.88c0-4.418-3.582-8-8-8H46c-4.418,0-8,3.582-8,8V169H8c-4.418,0-8,3.582-8,8s3.582,8,8,8h30.08
			v118.08c0,35.44,25.36,48,49.2,48h207.2c35.44,0,48-24.8,48-48V185h30.08c4.418,0,8-3.582,8-8S376.978,169,372.56,169z
			 M326.96,303.08c0,14.64-5.6,32-32,32h-208c-12.4,0-33.2-4.16-33.2-32V154.12h273.2V303.08z"
        />
      </g>
    </g>
  </svg>
);
const BottleSpraySvg = () => (
  <svg width="15px" height="15px" viewBox="0 0 480 480">
    <g>
      <g>
        <path
          d="M308,0H180c-4.418,0-8,3.582-8,8v8h-24c-4.418,0-8,3.582-8,8v48c0,4.418,3.582,8,8,8h24v6.112l-31.16,62.312
			c-1.975,3.952-0.372,8.757,3.58,10.732c1.112,0.555,2.337,0.844,3.58,0.844h32c3.032,0.001,5.805-1.712,7.16-4.424L216.944,96H252
			v16h-8c-4.418,0-8,3.582-8,8v44.688l-84.288,84.28c-7.525,7.487-11.742,17.673-11.712,28.288V440c0.026,22.08,17.92,39.974,40,40
			h144c22.08-0.026,39.974-17.92,40-40V120c0-4.418-3.582-8-8-8h-8V96h40c4.418,0,8-3.582,8-8C395.947,39.421,356.579,0.053,308,0z
			 M156,64V32h16v32H156z M175.056,144h-14.112l24-48h14.112L175.056,144z M348,440c0,13.255-10.745,24-24,24H180
			c-13.255,0-24-10.745-24-24V277.256c-0.019-6.369,2.51-12.482,7.024-16.976L199.312,224H348V440z M348,208H215.312l32-32H348V208z
			 M348,160h-96v-32h96V160z M268,112V96h64v16H268z M340,80H188V16h120c36.653,0.044,67.44,27.579,71.56,64H340z"
        />
      </g>
    </g>
    <g>
      <g>
        <rect x="84" y="40" width="40" height="16" />
      </g>
    </g>
    <g>
      <g>
        <rect
          x="100.001"
          y="-1.888"
          transform="matrix(0.4472 -0.8944 0.8944 0.4472 45.3912 105.4434)"
          width="16"
          height="35.776"
        />
      </g>
    </g>
    <g>
      <g>
        <rect
          x="90.115"
          y="71.998"
          transform="matrix(0.8944 -0.4472 0.4472 0.8944 -24.3741 56.7455)"
          width="35.776"
          height="16"
        />
      </g>
    </g>
  </svg>
);
const BottleSvg = () => (
  <svg
    viewBox="0 0 510.993 510.993"
    width="15px"
    height="15px"
    // style="enable-background:new 0 0 510.993 510.993;"
  >
    <g>
      <path
        d="M362.053,199.444l-10.051-10.05c8.765-3.416,14.995-11.942,14.995-21.901v-32c0-12.958-10.542-23.5-23.5-23.5h-6.488
		c-7.739-19.946-22.716-36.673-41.791-46.4c-4.176-2.13-4.768-7.285-3.206-11.055c2.798-6.752,3.647-14.211,2.455-21.572
		c-2.741-16.922-17.118-30.67-34.185-32.689c-11.288-1.333-22.59,2.193-31.016,9.682c-8.433,7.494-13.27,18.259-13.27,29.535
		c0,5.337,1.053,10.517,3.131,15.395c1.792,4.207,0.295,8.837-3.481,10.771c-19.063,9.761-34.017,26.463-41.729,46.334h-6.421
		c-12.958,0-23.5,10.542-23.5,23.5v32c0,9.958,6.229,18.484,14.994,21.9l-10.052,10.052c-13.504,13.504-20.942,31.459-20.942,50.558
		v205.49c0,30.603,24.897,55.5,55.5,55.5h144c30.603,0,55.5-24.897,55.5-55.5V250.005
		C382.997,230.906,375.559,212.949,362.053,199.444z M222.483,79.01c10.869-5.565,15.359-18.462,10.445-30
		c-1.282-3.009-1.932-6.211-1.932-9.517c0-6.994,3.001-13.672,8.234-18.322c5.303-4.712,12.158-6.844,19.29-5.999
		c10.557,1.249,19.447,9.741,21.141,20.191c0.747,4.609,0.226,9.254-1.505,13.431c-4.863,11.734-0.458,24.701,10.248,30.161
		c14.044,7.162,25.415,18.906,32.274,33.037H190.251C197.091,97.921,208.446,86.198,222.483,79.01z M158.997,135.493
		c0-4.687,3.813-8.5,8.5-8.5h11.685c0.009,0,0.017,0.002,0.026,0.002c0.008,0,0.016-0.002,0.024-0.002h152.487
		c0.019,0,0.038,0,0.057,0h11.722c4.687,0,8.5,3.813,8.5,8.5v32c0,4.687-3.813,8.5-8.5,8.5h-176c-4.687,0-8.5-3.813-8.5-8.5V135.493
		z M367.997,455.493c0,22.332-18.168,40.5-40.5,40.5h-144c-22.332,0-40.5-18.168-40.5-40.5v-24.5h32.5c4.142,0,7.5-3.358,7.5-7.5
		s-3.358-7.5-7.5-7.5h-32.5v-25h16.5c4.142,0,7.5-3.358,7.5-7.5s-3.358-7.5-7.5-7.5h-16.5v-25h32.5c4.142,0,7.5-3.358,7.5-7.5
		s-3.358-7.5-7.5-7.5h-32.5v-25h16.5c4.142,0,7.5-3.358,7.5-7.5s-3.358-7.5-7.5-7.5h-16.5v-25h32.5c4.142,0,7.5-3.358,7.5-7.5
		s-3.358-7.5-7.5-7.5h-32.5v-5.99c0-15.092,5.877-29.28,16.548-39.952l19.058-19.058h153.783l19.06,19.058
		c10.673,10.672,16.55,24.861,16.55,39.954V455.493z"
      />
      <path
        d="M343.497,271.994c-4.142,0-7.5,3.358-7.5,7.5v104.001c0,4.142,3.358,7.5,7.5,7.5s7.5-3.358,7.5-7.5V279.494
		C350.997,275.352,347.639,271.994,343.497,271.994z"
      />
      <path
        d="M328.819,222.073c-2.929,2.929-2.928,7.678,0,10.607c4.628,4.627,7.177,10.78,7.177,17.325c0,4.142,3.358,7.5,7.5,7.5
		s7.5-3.358,7.5-7.5c0-10.551-4.109-20.471-11.57-27.932C336.497,219.144,331.748,219.144,328.819,222.073z"
      />
      <path
        d="M319.497,158.993h8c4.142,0,7.5-3.358,7.5-7.5s-3.358-7.5-7.5-7.5h-8c-4.142,0-7.5,3.358-7.5,7.5
		S315.355,158.993,319.497,158.993z"
      />
      <path
        d="M231.497,158.993h56c4.142,0,7.5-3.358,7.5-7.5s-3.358-7.5-7.5-7.5h-56c-4.142,0-7.5,3.358-7.5,7.5
		S227.355,158.993,231.497,158.993z"
      />
    </g>
  </svg>
);
const MakeupSvg = () => (
  <svg
    viewBox="0 0 512.001 512.001"
    width="15px"
    height="15px"
    // style="enable-background:new 0 0 512.001 512.001;"
  >
    <g>
      <g>
        <path
          d="M479.655,29.8C459.804,10.604,433.664,0.033,406.05,0.033c-27.613,0-53.754,10.572-73.606,29.768l-1.332,1.289
			c-32.313,31.247-41.37,79.665-22.533,120.481l33.357,72.28v243.452c0,24.629,20.036,44.665,44.665,44.665h34.655
			c24.628,0,44.664-20.036,44.664-44.665V223.957l35.107-71.241C521.437,111.297,512.849,61.9,479.655,29.8z M445.922,467.302
			c0,13.601-11.066,24.668-24.667,24.668h-34.655c-13.602,0-24.668-11.066-24.668-24.668v-152.31h44.015v64.446
			c0,5.521,4.476,9.999,9.999,9.999c5.522,0,9.999-4.477,9.999-9.999v-64.446h19.976V467.302z M361.932,294.995v-63.583H377.1
			c0.015,0,0.029,0.002,0.043,0.002c0.016,0,0.032-0.002,0.047-0.002h56.386c0.016,0,0.032,0.002,0.047,0.002
			c0.015,0,0.029-0.002,0.043-0.002h12.255v63.583H361.932z M483.088,143.878l-33.281,67.537h-4.392l8.058-48.35
			c0.908-5.446-2.772-10.599-8.219-11.507c-5.446-0.906-10.599,2.772-11.507,8.22l-8.606,51.637h-11.215v-49.994
			c0-5.521-4.476-9.999-9.999-9.999c-5.522,0-9.999,4.477-9.999,9.999v49.994h-8.303l-8.607-51.638
			c-0.907-5.445-6.06-9.125-11.507-8.219c-5.447,0.908-9.127,6.06-8.219,11.508l8.059,48.349h-7.132l-31.485-68.223
			c-15.278-33.107-7.933-72.38,18.28-97.727l1.332-1.289c33.479-32.372,85.928-32.372,119.406,0
			C492.678,70.213,499.645,110.28,483.088,143.878z"
        />
      </g>
    </g>
    <g>
      <g>
        <path
          d="M133.983,320.093v-44.095c0-8.182-4.944-15.223-11.998-18.316v-61.783c0-11.077-6.065-21.207-15.829-26.44L74.16,152.315
			c-9.384-5.027-20.439-4.767-29.575,0.704c-9.135,5.467-14.588,15.088-14.588,25.735v78.927
			c-7.054,3.093-11.998,10.134-11.998,18.316v44.095C7.907,321.099,0,329.636,0,339.989v141.982
			c0,16.54,13.456,29.996,29.996,29.996h91.988c16.54,0,29.996-13.456,29.996-29.996V339.989
			C151.981,329.637,144.074,321.1,133.983,320.093z M49.994,178.754c0-5.115,3.401-7.703,4.862-8.579
			c1.462-0.875,5.35-2.649,9.858-0.234l31.996,17.144c3.255,1.744,5.276,5.121,5.276,8.813v60.101H49.994V178.754z M37.995,275.998
			h2h71.991h2v43.994h-75.99V275.998z M131.983,481.972c0,5.513-4.485,9.999-9.999,9.999h-17.998v-75.99
			c0-5.521-4.476-9.999-9.999-9.999c-5.522,0-9.999,4.477-9.999,9.999v75.99H29.996c-5.513,0-9.999-4.485-9.999-9.999V339.99
			h111.986V481.972z"
        />
      </g>
    </g>
    <g>
      <g>
        <path
          d="M101.057,370.916c-1.86-1.86-4.429-2.93-7.069-2.93c-2.63,0-5.209,1.069-7.069,2.93c-1.86,1.86-2.93,4.439-2.93,7.069
			c0,2.63,1.07,5.209,2.93,7.068c1.86,1.86,4.439,2.931,7.069,2.931c2.64,0,5.209-1.07,7.069-2.931
			c1.86-1.859,2.93-4.438,2.93-7.068C103.987,375.355,102.917,372.775,101.057,370.916z"
        />
      </g>
    </g>
    <g>
      <g>
        <path
          d="M293.963,246.002h-45.994v-97.988h17.01c5.522,0,9.999-4.477,9.999-9.999s-4.476-9.999-9.999-9.999h-17.01v-11.998h17.01
			c5.522,0,9.999-4.477,9.999-9.999s-4.476-9.999-9.999-9.999h-17.01V84.022h17.01c5.522,0,9.999-4.477,9.999-9.999
			s-4.476-9.999-9.999-9.999h-17.01V52.026h17.01c5.522,0,9.999-4.477,9.999-9.999s-4.476-9.999-9.999-9.999h-17.01V20.03h17.01
			c5.522,0,9.999-4.477,9.999-9.999s-4.476-9.999-9.999-9.999h-54.016c-5.522,0-9.999,4.477-9.999,9.999s4.476,9.999,9.999,9.999
			h17.009v11.998h-17.01c-5.522,0-9.999,4.477-9.999,9.999s4.476,9.999,9.999,9.999h17.01v11.998h-17.01
			c-5.522,0-9.999,4.477-9.999,9.999s4.476,9.999,9.999,9.999h17.01v11.998h-17.01c-5.522,0-9.999,4.477-9.999,9.999
			s4.476,9.999,9.999,9.999h17.01v11.998h-17.01c-5.522,0-9.999,4.477-9.999,9.999s4.476,9.999,9.999,9.999h17.01v97.988h-45.994
			c-5.522,0-9.999,4.477-9.999,9.999v111.689c0,49.181,13.474,97.406,38.966,139.462c1.813,2.99,5.054,4.815,8.551,4.815h36.949
			c3.497,0,6.739-1.826,8.551-4.815c25.492-42.057,38.966-90.282,38.966-139.462V256
			C303.961,250.478,299.485,246.002,293.963,246.002z M283.964,367.689c0,43.657-11.473,86.506-33.225,124.281h-25.54
			c-21.751-37.776-33.224-80.624-33.224-124.281v-57.696h60.253c5.522,0,9.999-4.477,9.999-9.999s-4.476-9.999-9.999-9.999h-60.253
			v-23.997h91.988V367.689z"
        />
      </g>
    </g>
    <g>
      <g>
        <path
          d="M423.016,407.361c-1.86-1.86-4.439-2.93-7.069-2.93c-2.63,0-5.209,1.069-7.069,2.93c-1.86,1.86-2.93,4.438-2.93,7.069
			c0,2.63,1.07,5.209,2.93,7.068c1.86,1.87,4.439,2.931,7.069,2.931c2.63,0,5.209-1.061,7.069-2.931
			c1.86-1.859,2.93-4.429,2.93-7.068C425.946,411.799,424.876,409.221,423.016,407.361z"
        />
      </g>
    </g>
  </svg>
);
const TshirtSvg = () => (
  <svg
    viewBox="0 0 407.7 407.7"
    width="15px"
    height="15px"
    //  style="enable-background:new 0 0 407.7 407.7;"
  >
    <g>
      <g>
        <path
          d="M405.5,118.021c-0.094-0.099-0.191-0.196-0.29-0.29l-84.16-74.8c-0.768-0.7-1.664-1.243-2.64-1.6l-60.88-21.76
			c-4.153-1.508-8.742,0.637-10.25,4.79c-0.272,0.749-0.43,1.534-0.47,2.33c0,1.76-2.64,42.32-43.2,42.96
			c-40.8-0.64-43.36-41.2-43.44-42.96c-0.236-4.412-4.004-7.797-8.416-7.561c-0.758,0.041-1.507,0.189-2.224,0.441l-60.8,22
			c-0.976,0.357-1.872,0.9-2.64,1.6l-83.6,74.56c-3.203,3.043-3.333,8.107-0.29,11.31c0.094,0.099,0.191,0.196,0.29,0.29
			l66.56,67.28v184c0,4.418,3.582,8,8,8h253.6c4.418,0,8-3.582,8-8v-184l66.56-67.28C408.413,126.288,408.543,121.225,405.5,118.021
			z M338.41,173.811v-37.12c0-4.418-3.582-8-8-8s-8,3.582-8,8v235.52H84.73v-235.52c0-4.418-3.582-8-8-8s-8,3.582-8,8v37.2
			l-49.2-49.84l76.16-68.16l50.08-18.08c6.204,31.966,37.147,52.851,69.113,46.647c23.607-4.582,42.065-23.04,46.647-46.647
			l50.08,18.08l75.92,68.16L338.41,173.811z"
        />
      </g>
    </g>
  </svg>
);
const BallSvg = () => (
  <svg
    width="15px"
    height="15px"
    viewBox="0 0 77.832 77.832"
    // style="enable-background:new 0 0 77.832 77.832;"
  >
    <g>
      <path
        d="M38.916,0C17.458,0,0,17.458,0,38.916c0,2.489,0.245,4.923,0.693,7.284l-0.146,0.175c0.07,0.059,0.138,0.109,0.208,0.167
		c3.555,17.819,19.312,31.29,38.161,31.29c21.458,0,38.916-17.458,38.916-38.916S60.374,0,38.916,0z M72.061,25.249
		c-0.052,12.625-11.312,15.317-16.045,15.888c3.945-13.604,2.821-26.663,1.959-32.572C64.236,12.512,69.199,18.337,72.061,25.249z
		 M54.559,6.658c0.653,3.375,3.119,18.577-1.675,34.318c-9.122-2.418-10.416-9.061-12.143-18.104
		c-1.169-6.126-2.491-12.99-6.694-19.474c1.594-0.217,3.217-0.339,4.869-0.339C44.521,3.059,49.829,4.354,54.559,6.658z
		 M30.764,4.005c4.453,6.291,5.793,13.262,6.973,19.441c1.714,8.979,3.346,17.479,14.175,20.446
		c-0.799,2.201-1.749,4.398-2.877,6.562c-22.46-10.88-36.241-28.358-39.237-32.423C14.786,11.094,22.187,6.007,30.764,4.005z
		 M8.018,20.751c4.195,5.486,17.939,21.856,39.521,32.371c-0.844,1.407-1.773,2.791-2.789,4.147
		c-5.908-2.934-11.457-3.388-16.834-3.826c-7.44-0.607-15.128-1.256-24.354-8.571c-0.326-1.938-0.504-3.926-0.504-5.956
		C3.059,32.29,4.872,26.083,8.018,20.751z M4.647,49.475c8.612,5.83,15.922,6.438,23.021,7.018c5.113,0.417,9.972,0.82,15.12,3.232
		c-4.148,4.854-9.563,9.235-16.591,12.709C15.932,68.525,7.908,60.038,4.647,49.475z M30.319,73.725
		c6.382-3.564,11.38-7.873,15.283-12.574c1.639,0.906,4.851,3.021,5.688,6.066c0.497,1.805,0.046,3.756-1.312,5.803
		c-3.485,1.133-7.201,1.754-11.061,1.754C35.953,74.773,33.074,74.405,30.319,73.725z M54.134,71.374
		c0.507-1.685,0.552-3.351,0.101-4.983c-1.068-3.863-4.598-6.434-6.729-7.677c1.028-1.403,1.967-2.833,2.823-4.284
		c5.354,2.402,11.157,4.416,17.387,5.82C64.193,64.993,59.529,68.834,54.134,71.374z M69.557,57.523
		c-6.373-1.342-12.293-3.354-17.74-5.776c1.27-2.456,2.322-4.952,3.191-7.446c2.686-0.195,10.21-1.199,15.299-6.387
		c1.709-1.742,2.957-3.786,3.758-6.096c0.463,2.295,0.709,4.668,0.709,7.098C74.773,45.725,72.865,52.096,69.557,57.523z"
      />
    </g>
  </svg>
);
const BikeSvg = () => (
  <svg
    // enable-background="new 0 0 512 512"
    width="15px"
    height="15px"
    viewBox="0 0 512 512"
  >
    <path d="m393.626 80.521v-30h-73.857c-6.803-28.92-32.802-50.521-63.769-50.521s-56.966 21.601-63.769 50.521h-73.857v30h73.857c2.053 8.73 5.846 16.793 11.009 23.795-43.025 11.292-74.858 50.513-74.858 97.032v194.08l64.743 34.292v19.405c0 34.669 28.206 62.875 62.875 62.875s62.874-28.206 62.874-62.875v-15.298l64.744-38.947v-193.531c0-46.519-31.833-85.739-74.859-97.032 5.163-7.002 8.956-15.066 11.009-23.795h73.858zm-137.626-50.521c19.587 0 35.521 15.935 35.521 35.521s-15.934 35.521-35.521 35.521c-19.586 0-35.521-15.935-35.521-35.521s15.935-35.521 35.521-35.521zm32.874 419.125c0 18.127-14.747 32.875-32.874 32.875s-32.875-14.748-32.875-32.875v-125.452c0-18.127 14.748-32.875 32.875-32.875s32.874 14.748 32.874 32.875zm64.744-247.776v176.569l-34.744 20.9v-75.144c0-34.669-28.205-62.875-62.874-62.875s-62.875 28.206-62.875 62.875v72.099l-34.743-18.402v-176.022c0-38.767 31.539-70.306 70.306-70.306h54.623c38.768-.001 70.307 31.539 70.307 70.306z" />
  </svg>
);
const BookSvg = () => (
  <svg
    viewBox="0 0 512 512"
    width="15px"
    height="15px"
    // style="enable-background:new 0 0 512 512;"
  >
    <g>
      <g>
        <path
          d="M437.333,53.333c0-25.067,8.085-35.733,8.085-35.733c2.731-3.136,3.328-7.595,1.6-11.392
			C445.291,2.411,441.493,0,437.333,0h-320C87.936,0,64,23.915,64,53.333c0,29.419,23.936,53.333,53.333,53.333h320
			c4.075,0,7.744-2.411,9.515-6.101c1.792-3.669,1.237-8.128-1.28-11.328C445.483,89.131,437.333,78.464,437.333,53.333z
			 M420.459,85.333H117.333c-17.643,0-32-14.357-32-32c0-17.643,14.357-32,32-32h303.125c-2.453,7.787-4.459,18.325-4.459,32
			C416,67.008,418.005,77.547,420.459,85.333z"
        />
      </g>
    </g>
    <g>
      <g>
        <path
          d="M416,42.667H117.333c-5.888,0-10.667,4.779-10.667,10.667S111.445,64,117.333,64H416c5.888,0,10.667-4.779,10.667-10.667
			S421.888,42.667,416,42.667z"
        />
      </g>
    </g>
    <g>
      <g>
        <path
          d="M437.333,85.333c-5.888,0-10.667,4.779-10.667,10.667v394.667H117.333c-17.643,0-32-14.357-32-32V53.333
			c0-5.888-4.779-10.667-10.667-10.667S64,47.445,64,53.333v405.333C64,488.085,87.936,512,117.333,512h320
			c5.888,0,10.667-4.779,10.667-10.667V96C448,90.112,443.221,85.333,437.333,85.333z"
        />
      </g>
    </g>
  </svg>
);

const PhoneIcon = (props) => <Icon component={PhoneSvg} {...props} />;
const TvIcon = (props) => <Icon component={TvSvg} {...props} />;
const HeadphonesIcon = (props) => <Icon component={HeadphonesSvg} {...props} />;
const LaptopIcon = (props) => <Icon component={LaptopSvg} {...props} />;
const CameraIcon = (props) => <Icon component={CameraSvg} {...props} />;
const WashingMachineIcon = (props) => (
  <Icon component={WashingMachineSvg} {...props} />
);
const PotIcon = (props) => <Icon component={PotSvg} {...props} />;
const BottleSprayIcon = (props) => (
  <Icon component={BottleSpraySvg} {...props} />
);
const BottleIcon = (props) => <Icon component={BottleSvg} {...props} />;
const MakeupIcon = (props) => <Icon component={MakeupSvg} {...props} />;
const TshirtIcon = (props) => <Icon component={TshirtSvg} {...props} />;
const BallIcon = (props) => <Icon component={BallSvg} {...props} />;
const BikeIcon = (props) => <Icon component={BikeSvg} {...props} />;
const BookIcon = (props) => <Icon component={BookSvg} {...props} />;

const danhMucSanPham = (
  <Menu>
    <Menu.Item>
      <div>
        <Link to="/phone">
          <PhoneIcon /> Điện thoại - Máy tính bảng
        </Link>
      </div>
    </Menu.Item>
    <Menu.Item>
      <div>
        <Link to="/tv">
          <TvIcon /> Điện tử - Điện lạnh
        </Link>
      </div>
    </Menu.Item>
    <Menu.Item>
      <div>
        <Link to="/accessories">
          <HeadphonesIcon /> Phụ kiện - Thiết bị số
        </Link>
      </div>
    </Menu.Item>
    <Menu.Item>
      <div>
        <Link to="/laptop">
          <LaptopIcon /> Laptop - Thiết bị IT
        </Link>
      </div>
    </Menu.Item>
    <Menu.Item>
      <div>
        <Link to="/camera">
          <CameraIcon /> Máy ảnh - Thiết bị quay phim
        </Link>
      </div>
    </Menu.Item>
    <Menu.Item>
      <div>
        <Link to="/appliance">
          <WashingMachineIcon /> Điện gia dụng
        </Link>
      </div>
    </Menu.Item>
    <Menu.Item>
      <div>
        <Link to="/house">
          <PotIcon /> Nhà cửa đời sống
        </Link>
      </div>
    </Menu.Item>
    <Menu.Item>
      <div>
        <Link to="/food">
          <BottleSprayIcon /> Hàng tiêu dùng - Thực phẩm
        </Link>
      </div>
    </Menu.Item>
    <Menu.Item>
      <div>
        <Link to="/toys">
          <BottleIcon /> Đồ chơi, Mẹ & bé
        </Link>
      </div>
    </Menu.Item>
    <Menu.Item>
      <div>
        <Link to="/beauty">
          <MakeupIcon /> Làm đẹp - Sức khỏe
        </Link>
      </div>
    </Menu.Item>
    <Menu.Item>
      <div>
        <Link to="/fashion">
          <TshirtIcon /> Thời trang - Phụ kiện
        </Link>
      </div>
    </Menu.Item>
    <Menu.Item>
      <div>
        <Link to="/sport">
          <BallIcon /> Thể thao - Dã ngoại
        </Link>
      </div>
    </Menu.Item>
    <Menu.Item>
      <div>
        <Link to="/bike">
          <BikeIcon /> Xe máy, Ô tô, Xe đạp
        </Link>
      </div>
    </Menu.Item>
    <Menu.Item>
      <div>
        <Link to="/book">
          <BookIcon /> Sách - VPP & Quà tặng
        </Link>
      </div>
    </Menu.Item>
  </Menu>
);

const DropdownComponent = () => {
  return (
    <div className="wrap-dropdown">
      <Dropdown overlay={danhMucSanPham}>
        <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
          <Row>
            <Col flex="30px">
              <MenuOutlined style={{ fontSize: "30px" }} />
            </Col>
            <Col flex="auto" className="col-drop">
              <div className="row1">Danh mục</div>
              <div className="row2">
                sản phẩm
                <CaretDownOutlined />
              </div>
            </Col>
          </Row>
        </a>
      </Dropdown>
    </div>
  );
};

export default DropdownComponent;

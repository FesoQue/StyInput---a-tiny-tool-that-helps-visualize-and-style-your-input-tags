import { useState, useRef, useEffect } from 'react';
import { TwitterPicker } from 'react-color';

const App = () => {
  const [fontSize, setFontSize] = useState('22');
  const [fontColor, setFontColor] = useState('#000000');
  const [color, setColor] = useState('#000000');
  const [bgColor, setBgColor] = useState('#ffffff');
  const [showPicker, setShowPicker] = useState(false);
  const [showTextClr, setTextClr] = useState(false);
  const [showBgClr, setBgClr] = useState(false);
  const [focusBoxShdwClr, setFocusBoxShdwClr] = useState('#000000');
  const [showBShdw, setShowBoxShdw] = useState(false);
  const [radius, setRadius] = useState('1');
  const [borderSize, setBorderSize] = useState('1');
  const [boxShadow, setBoxShadow] = useState('0');
  const [outline, setOutline] = useState('0');
  const [topPadding, setTopPadding] = useState('0');
  const [rightPadding, setRightPadding] = useState('0');
  const [leftPadding, setLeftPadding] = useState('0');
  const [bottomPadding, setBottomPadding] = useState('0');
  const [focusShdwVal, setFocusShdwVal] = useState('0');
  const [copyCode, setCopyCode] = useState(false);

  // font-size
  const handleFontSize = (e) => {
    const value = e.target.value;
    setFontSize(value);
  };
  // top padding
  const handleTopPadding = (e) => {
    const value = e.target.value;
    setTopPadding(value);
  };
  // right padding
  const handleRightPadding = (e) => {
    const value = e.target.value;
    setRightPadding(value);
  };
  // left padding
  const handleLeftPadding = (e) => {
    const value = e.target.value;
    setLeftPadding(value);
  };
  // bottom padding
  const handleBottomPadding = (e) => {
    const value = e.target.value;
    setBottomPadding(value);
  };
  // border
  const handleBorder = (e) => {
    const radiusValue = e.target.value;
    setBorderSize(radiusValue);
  };
  // border-radius
  const handleBorderRadius = (e) => {
    const radiusValue = e.target.value;
    setRadius(radiusValue);
  };
  // box-shadow
  const handleBoxShadow = (e) => {
    const shadowValue = e.target.value;
    setBoxShadow(shadowValue);
  };
  // onFocus box-shadow
  const handleFocusShdwVal = (e) => {
    const shadowValue = e.target.value;
    setFocusShdwVal(shadowValue);
  };
  // enable/disable outline
  const handleCheckbox = (e) => {
    const value = e.target.checked;
    if (value) {
      setOutline('1');
    } else {
      setOutline('0');
    }
  };
  // show color picker
  const handleShowPicker = () => {
    setShowPicker(true);
  };
  // :onFocus
  const handleFocusShdwClr = () => {
    setShowBoxShdw(true);
  };
  const refContainer = useRef(null);
  const handleOnFocus = () => {
    refContainer.current.style.boxShadow = `${focusBoxShdwClr} 0 0 ${focusShdwVal}px ${focusShdwVal}px`;
  };
  const handleOnBlur = () => {
    refContainer.current.style.boxShadow = `${color} 0 0 0 ${boxShadow}px`;
    refContainer.current.style.border = `${color} 0 0 0 ${radius}px`;
  };
  // border el
  const borderEl = useRef(null);
  const borderRadiusEl = useRef(null);
  const boxShadowEl = useRef(null);
  const focusShdwEl = useRef(null);

  useEffect(() => {
    // border
    borderEl.current.style.background = `linear-gradient(to right, #00c48c ${
      borderSize * 10
    }%, #00c48c ${borderSize * 10}%, #faf9f9 ${
      borderSize * 10
    }%, #faf9f9 100%)`;
    // border radius
    borderRadiusEl.current.style.background = `linear-gradient(to right, #00c48c ${
      radius * 2
    }%, #00c48c ${radius * 2}%, #faf9f9 ${radius * 2}%, #faf9f9 100%)`;
    // box shadow
    boxShadowEl.current.style.background = `linear-gradient(to right, #00c48c ${
      boxShadow * 10
    }%, #00c48c ${boxShadow * 10}%, #faf9f9 ${boxShadow * 10}%, #faf9f9 100%)`;
    // :on focus box-shadow
    focusShdwEl.current.style.background = `linear-gradient(to right, #00c48c ${
      focusShdwVal * 10
    }%, #00c48c ${focusShdwVal * 10}%, #faf9f9 ${
      focusShdwVal * 10
    }%, #faf9f9 100%)`;
  }, [borderSize, radius, boxShadow, focusShdwVal]);

  const inputCSSCodes = `input {
    width: 100%;
    font: inherit;
    font-size: ${fontSize}px;
    color: ${fontColor};
    background: ${bgColor};
    padding: ${topPadding}px, ${rightPadding}px, ${bottomPadding}px, ${leftPadding}px;
    border: ${borderSize}px solid ${color};
    border-radius: ${radius}px;
    box-shadow: 0 0 0 ${boxShadow}px ${color};
    outline-width: ${outline}px;
    transition: all 0.2s ease;
  }
  
  input:focus {
    box-shadow: 0 0 0 ${focusShdwVal}px ${focusBoxShdwClr};
  }

  /* remove if your input type is "text" or "email" */
  input[type='number'] {
  -webkit-appearance: textfield;
  }
  input[type='number'] {
  -moz-appearance: textfield;
  }

  /* removes chrome autocomplete pale blue highlight */
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
  -webkit-box-shadow: 0 0 0 30px white inset !important;
  box-shadow: 0 0 0 30px white inset !important;
}
  `;

  // copy css codes
  const copyCodes = () => {
    navigator.clipboard.writeText(inputCSSCodes);
    setCopyCode(true);
  };
  setTimeout(() => {
    setCopyCode(false);
  }, 2000);

  return (
    <section>
      {/* header */}
      <header>
        <div className='title'>
          <h1>StyInput</h1>
          <p>Visualiz👁 your input styles</p>
        </div>
      </header>
      <form>
        <div className='preview-text'>
          <h2>Preview:</h2>
        </div>
        <div className='preview'>
          <input
            type='text'
            name=''
            id='input'
            onFocus={handleOnFocus}
            onBlur={handleOnBlur}
            ref={refContainer}
            placeholder='Style me'
            style={{
              fontSize: `${fontSize}px`,
              color: `${fontColor}`,
              background: `${bgColor}`,
              paddingTop: `${topPadding}px`,
              paddingRight: `${rightPadding}px`,
              paddingLeft: `${leftPadding}px`,
              paddingBottom: `${bottomPadding}px`,
              borderRadius: `${radius}px`,
              border: `${borderSize}px solid ${color}`,
              boxShadow: `0 0 0 ${boxShadow}px ${color}`,
              outlineWidth: `${outline}px`,
            }}
          />
        </div>
        <div className='form-groups'>
          <div className='title'>
            <h2>Customize Widget: </h2>
          </div>
          {/* TEXTS */}
          <div className='fonts'>
            <div className='props-title'>
              <h3>Text:</h3>
            </div>
            <div className='fonts-prop'>
              <div className='fontSize'>
                <label htmlFor='fontsize'>Font-Size:</label>
                <input
                  type='number'
                  name='font-size'
                  id='fontsize'
                  className='box'
                  value={fontSize}
                  onChange={handleFontSize}
                />
                <span> px</span>
              </div>
              {/* font color */}
              <div className='color-wrapper'>
                <div className='color'>
                  <p>Font-Color:</p>
                  <div
                    onClick={() => setTextClr(true)}
                    className='color-palettes'
                    style={{
                      background: `${fontColor}`,
                      boxShadow: `0 0 0 3px ${fontColor}`,
                    }}
                  ></div>
                </div>
                {showTextClr ? (
                  <div className='color-picker font-clr-picker'>
                    {/* close btn */}
                    <span onClick={() => setTextClr(!showTextClr)}>
                      <i className='fas fa-times'></i>
                    </span>
                    <div className='twitter-clr-picker '>
                      <TwitterPicker
                        className='picker font-picker'
                        fontColor={fontColor}
                        onChangeComplete={(fontColor) => {
                          setFontColor(fontColor.hex);
                        }}
                      />
                    </div>
                  </div>
                ) : null}
              </div>
              {/* background color */}
              <div className='color-wrapper'>
                <div className='color'>
                  <p>Background Color:</p>
                  <div
                    onClick={() => setBgClr(true)}
                    className='color-palettes'
                    style={{
                      background: `${bgColor}`,
                      boxShadow: `0 0 0 3px ${bgColor}`,
                    }}
                  ></div>
                </div>
                {showBgClr ? (
                  <div className='color-picker'>
                    {/* close btn */}
                    <span onClick={() => setBgClr(!showBgClr)}>
                      <i className='fas fa-times'></i>
                    </span>
                    <div className='twitter-clr-picker '>
                      <TwitterPicker
                        className='picker'
                        fontColor={bgColor}
                        onChangeComplete={(bgColor) => {
                          setBgColor(bgColor.hex);
                        }}
                      />
                    </div>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
          {/* PADDINGS */}
          <div className='box-sizing'>
            <div className='padding'>
              <div className='props-title'>
                <h3>Padding:</h3>
              </div>
              <div className='padding-props'>
                {/* top */}
                <div className='padding-props-t'>
                  <label htmlFor='top'>Top:</label>
                  <input
                    type='number'
                    name='p-top'
                    id='top'
                    className='box'
                    value={topPadding}
                    onChange={handleTopPadding}
                  />
                  <span> px:</span>
                </div>
                {/* right */}
                <div className='padding-props-r'>
                  <label htmlFor='right'>Right:</label>
                  <input
                    type='number'
                    name='p-right'
                    id='right'
                    className='box'
                    value={rightPadding}
                    onChange={handleRightPadding}
                  />
                  <span> px:</span>
                </div>
                {/* left */}
                <div className='padding-props-l'>
                  <label htmlFor='left'>Left:</label>
                  <input
                    type='number'
                    name='p-left'
                    id='left'
                    className='box'
                    value={leftPadding}
                    onChange={handleLeftPadding}
                  />
                  <span> px:</span>
                </div>
                {/* bottom */}
                <div className='padding-props-b'>
                  <label htmlFor='bottom'>Bottom:</label>
                  <input
                    type='number'
                    name='p-bottom'
                    id='bottom'
                    className='box'
                    value={bottomPadding}
                    onChange={handleBottomPadding}
                  />
                  <span> px;</span>
                </div>
              </div>
            </div>
          </div>
          {/* BORDER-PROPS */}
          <div className='border-props'>
            <div className='grp1'>
              {/* border */}
              <div className='widget'>
                <label htmlFor='border'>Border: </label>
                <input
                  type='range'
                  name='border'
                  id='border'
                  ref={borderEl}
                  min='0'
                  max='10'
                  step='1'
                  value={borderSize}
                  onChange={handleBorder}
                  onInput={handleBorder}
                />
              </div>
              {/* border-radius */}
              <div className='widget'>
                <label htmlFor='border-radius'>Border-Radius: </label>
                <input
                  type='range'
                  name='border-radius'
                  id='border-radius'
                  ref={borderRadiusEl}
                  min='0'
                  max='50'
                  step='1'
                  value={radius}
                  onChange={handleBorderRadius}
                  onInput={handleBorderRadius}
                />
              </div>
            </div>
            <div className='grp2'>
              {/* box-shadow */}
              <div className='widget'>
                <label htmlFor='box-shadow'>Box-Shadow: </label>
                <input
                  type='range'
                  name='box-shadow'
                  id='box-shadow'
                  ref={boxShadowEl}
                  min='0'
                  max='10'
                  step='1'
                  value={boxShadow}
                  onChange={handleBoxShadow}
                  onInput={handleBoxShadow}
                />
              </div>
              {/* border/box-shadow color */}
              <div className='widget'>
                <div className='color-wrapper'>
                  <div className='color border-color'>
                    <p>Border/Box-Shadow Color:</p>
                    <div
                      onClick={handleShowPicker}
                      className='color-palettes border-clr-picker'
                      style={{
                        background: `${color}`,
                        boxShadow: `0 0 0 3px ${color}`,
                      }}
                    ></div>
                  </div>
                  {showPicker ? (
                    <div className='color-picker color-palettes-picker'>
                      {/* close btn */}
                      <span onClick={() => setShowPicker(!showPicker)}>
                        <i className='fas fa-times'></i>
                      </span>
                      <div className='twitter-clr-picker'>
                        <TwitterPicker
                          className='picker palettes-picker'
                          color={color}
                          onChangeComplete={(color) => {
                            setColor(color.hex);
                          }}
                        />
                      </div>
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
            {/* outline */}
            <div className='widget outline'>
              <label htmlFor='outline'>Outline:</label>
              <input
                type='checkbox'
                name='outline'
                id='outline'
                onChange={handleCheckbox}
              />
            </div>
          </div>
          {/* ON FOCUS */}
          <div className='pseudo-class'>
            <div className='props-title'>
              <h3>:Focus</h3>
            </div>
            <div className='focus-el'>
              {/* box-shadow */}
              <div className='widget'>
                <label htmlFor='onfocusBS'>Box-Shadow: </label>
                <input
                  type='range'
                  name='onfocusBS'
                  id='onfocusBS'
                  ref={focusShdwEl}
                  min='0'
                  max='10'
                  step='1'
                  value={focusShdwVal}
                  onChange={handleFocusShdwVal}
                  onInput={handleFocusShdwVal}
                />
              </div>
              {/* border/box-shadow color */}
              <div className='widget'>
                <div className='color-wrapper'>
                  <div className='color border-color'>
                    <p>Box-Shadow Color:</p>
                    <div
                      onClick={handleFocusShdwClr}
                      className='color-palettes border-clr-picker'
                      style={{
                        background: `${focusBoxShdwClr}`,
                        boxShadow: `0 0 0 3px ${focusBoxShdwClr}`,
                      }}
                    ></div>
                  </div>
                  {showBShdw ? (
                    <div className='color-picker color-palettes-picker'>
                      {/* close btn */}
                      <span onClick={() => setShowBoxShdw(!showBShdw)}>
                        <i className='fas fa-times'></i>
                      </span>
                      <div className='twitter-clr-picker'>
                        <TwitterPicker
                          className='picker palettes-picker'
                          focusBoxShdwClr={focusBoxShdwClr}
                          onChangeComplete={(focusBoxShdwClr) => {
                            setFocusBoxShdwClr(focusBoxShdwClr.hex);
                          }}
                        />
                      </div>
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
          {/* copy css code */}
          {copyCode ? (
            <div className='copied'>
              <span>
                <i className='fas fa-check'></i>
              </span>
            </div>
          ) : (
            <span className='copyIcon' onClick={copyCodes}>
              <i className='far fa-copy'></i>
            </span>
          )}
        </div>
      </form>
      {/* footer */}
      <div className='footer'>
        <div className='footer-content'>
          <div className='socials'>
            {/* twitter */}
            <a
              href='https://www.twitter.com/q__hue'
              className='twitter'
              target='_blank'
              rel='noreferrer'
            >
              Twitter
            </a>
            {/* twitter */}
            <a
              href='https://github.com/FesoQue'
              className='github'
              target='_blank'
              rel='noreferrer'
            >
              Github
            </a>
            {/* mail */}
            <a href='mailto:adefesoq0@gmail.com' className='mail'>
              Mail me
            </a>
          </div>
          <div className='attribution'>
            <p>
              Made with{' '}
              <span>
                <i className='fas fa-heart'></i>
              </span>{' '}
              by Adefeso Q.A
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default App;

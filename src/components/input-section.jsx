function InputSection({inputSection, isOpened, onShow}) {

  let openedClassName = isOpened ? 'opened' : 'closed'

  return(
    <div className={`inputSection ${openedClassName}`}>
      <button onClick={onShow}>
        <h2>{inputSection.title}</h2>
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"><path d="M480-528 296-344l-56-56 240-240 240 240-56 56-184-184Z"/></svg>
      </button>

      {isOpened ? (
        <div className="inputsContainer">
          {Object.keys(inputSection.inputs).map((input, i) => {
            return (
              <div className="inputs" key={Object.keys(inputSection.inputs)[i]}>
                <span>{inputSection.inputs[input].label}</span>
                <input type="text" placeholder={inputSection.inputs[input].placeholder}/>
              </div>
            )
          })}
        </div>
      ) : (
        <></>
      )}

    </div>
  )
}

export default InputSection
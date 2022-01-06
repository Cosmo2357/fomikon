class Fomikon {
  atOnFocus(_empty1, _empty2, _stateValidation, _setStateValidation, _setting) {
    if (_stateValidation === 1) {
      _setStateValidation(2);
    }
  }

  atOnBlur(_targetState, _empty2, _empty3, _setStateValidation, _setting) {
    const result = _setting.regex.test(_targetState);
    if (_setting.require === true) {
      if (result) {
        _setStateValidation(0);
      } else {
        _setStateValidation(3);
      }
    } else {
      if (_targetState === "") {
        _setStateValidation(0);
      } else if (result) {
        _setStateValidation(0);
      } else {
        _setStateValidation(3);
      }
    }
  }

  atUseEffect = (
    _targetState,
    _empty2,
    _stateValidation,
    _setStateValidation,
    _setting
  ) => {
    if (_setting.require === true) {
      if (_stateValidation === 2) {
        const result = _setting.regex.test(_targetState);
        if (result === true) {
          _setStateValidation(0);
        }
      }
      if (_stateValidation === 0 || _stateValidation === 3) {
        const result = _setting.regex.test(_targetState);
        if (result === true) {
          _setStateValidation(0);
        } else {
          _setStateValidation(3);
        }
      }
    } else {
      if (_stateValidation === 2) {
        const result = _setting.regex.test(_targetState);
        if (result === true) {
          _setStateValidation(0);
        }
      }
      if (_stateValidation === 0 || _stateValidation === 3) {
        const result = _setting.regex.test(_targetState);
        if (result === true) {
          _setStateValidation(0);
        } else if (_targetState === "") {
          _setStateValidation(0);
        } else {
          _setStateValidation(3);
        }
      }
    }
  };

  atButtonDisable = (a) => {
    if (a === 0) {
      return false;
    } else {
      return true;
    }
  };
}

export default Fomikon;

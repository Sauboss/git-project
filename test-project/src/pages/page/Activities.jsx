// import { debounce } from 'debounce';
import React, { useCallback } from 'react';
import Select from 'react-select';
import plus from '../../assets/image/Plus.svg';
import { debounce } from 'debounce';
import { useDispatch, useSelector } from 'react-redux';
import { setItems } from '../../redux/slices/filterSlice';

const Activities = () => {
  const [sort, setSort] = React.useState('');
  const [activeInput, setActiveInput] = React.useState('');
  const [descriptionName, setDescriptionName] = React.useState('');
  const [radio, setRadios] = React.useState('');
  const dispatch = useDispatch();

  const resetActivities = () => {
    setSort('');
    setActiveInput('');
    setDescriptionName('');
    setRadios('');
    console.log(sort);
  };

  const submitForm = () => {
    const data = {
      radio: radio,
      sort: sort.label,
      activeInput: activeInput,
      descriptionName: descriptionName,
    };

    dispatch(setItems(data));
    resetActivities();
    alert('success');
  };

  const getActiveName = useCallback(
    debounce((event) => {
      setActiveInput(event.target.value);
    }, 500),
    [],
  );
  const getDescriptionName = useCallback(
    debounce((event) => {
      setDescriptionName(event.target.value);
    }, 500),
    [],
  );

  const getValue = (e) => {
    setSort(e);
  };

  const item = {
    ActivityType: radio,
    Tier: sort?.label,
    ActivityName: activeInput,
    Description: descriptionName,
  };

  const colorStyles = {
    control: (style) => ({
      ...style,
      backgroundColor: `rgba(71, 147, 255, 0.2)`,
      width: '320px',
      height: '56px',
      border: 'none',
      borderRadius: '12px',
      zIndex: 0,
    }),
  };
  const options = [
    { value: 'Tier-1', label: '1 — Exceptional' },
    { value: 'Tier-2', label: '2 — Exceptional' },
    { value: 'Tier-3', label: '3 — Exceptional' },
    { value: 'Tier-4', label: '4 — Exceptional' },
  ];

  return (
    <>
      <div className="content__title__demo">Activities</div>
      <div className="activity__block">
        <div className="activity__container">
          <div className="activity__type">Activity type</div>
          <div className="input__type">
            <div className="radio">
              <input
                className="custom-radio"
                type="radio"
                id="color-1"
                name="color"
                value="Extracurriculars"
                onChange={() => setRadios('Extracurriculars')}
              />
              <label for="color-1">Extracurriculars</label>
            </div>
            <div className="radio">
              <input
                className="custom-radio"
                type="radio"
                id="color-2"
                name="color"
                value="Honors"
                onChange={() => setRadios('Honors')}
              />
              <label for="color-2">Honors</label>
            </div>
          </div>
          <div className="title__name">Tier</div>
          <Select
            onChange={(e) => getValue(e)}
            defaultValue={options}
            styles={colorStyles}
            options={options}
          />
          <div className="activity__name">Activity name</div>
          <input
            onChange={(event) => setActiveInput(event.target.value)}
            type="text"
            value={activeInput}
            className="activity__name__input"
            placeholder="Entre a name of activity"
          />
          <div className="activity__name">Description</div>
          <input
            onChange={(event) => setDescriptionName(event.target.value)}
            type="text"
            value={descriptionName}
            className="description__input"
            placeholder="Entre a description of activity"
          />

          <button onClick={() => submitForm()} className="activity__button">
            <img src={plus} alt="plus" className="plus" />
            <span>Add Activity</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Activities;

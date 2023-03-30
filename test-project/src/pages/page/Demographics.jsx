import React from 'react';
import Select from 'react-select';
import axios from 'axios';

const Demographics = () => {
  const [items, setItems] = React.useState([]);

  React.useEffect(() => {
    async function fetchCountry() {
      try {
        const { data } = await axios.get('https://api.worldbank.org/v2/country?format=json');
        setItems(data[1]);
      } catch (error) {
        alert('Ошибка при получении стран');
      }
    }

    fetchCountry();
  }, []);

  const options = [
    { value: 'gender-1', label: 'Female' },
    { value: 'gender-2', label: 'Male' },
  ];

  const colorStyles = {
    control: (style) => ({
      ...style,
      backgroundColor: `rgba(71, 147, 255, 0.2)`,
      width: '359px',
      height: '56px',
      border: 'none',
      borderRadius: '12px',
      zIndex: 0,
    }),
  };

  const [value, setValue] = React.useState('');
  const itemsCountry = items.map((obj, index) => {
    return (
      <option className="option__city" key={index}>
        {obj.name}
      </option>
    );
  });

  if (!items) {
    return <>...Загрузка</>;
  }

  return (
    <>
      <div className="content__title__demo">Demographics</div>
      <div className="content__block__demo">
        <div className="content__container">
          <div className="name__block">
            <div className="title__name">Gender</div>
            <Select defaultValue={options} styles={colorStyles} options={options} />
          </div>
          <div className="county__block">
            <div className="county">Country of Residence</div>
            <div className="dropdown-menu">
              <select
                className="select"
                value={value}
                onChange={(event) => setValue(event.target.value)}>
                {itemsCountry}
              </select>
            </div>
          </div>
          <div className="county__block__city">
            <div className="county__city">City of Residence</div>
            <Select styles={colorStyles} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Demographics;

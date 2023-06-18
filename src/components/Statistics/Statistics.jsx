import PropTypes from 'prop-types';

import statistics from './Statistics.module.css';

const getRandomHexColor = () => {
  let color = '#';
  for (let i = 0; i < 3; i++)
    color += (
      '0' + Math.floor((Math.random() * Math.pow(16, 2)) / 2).toString(16)
    ).slice(-2);
  return color;
};

export const Statistics = ({ title, stats }) => {
  return (
    <section className={statistics.statistics}>
      <h2 className={statistics.title}>{title}</h2>

      <ul className={statistics.list}>
        {stats.map(({ id, label, percentage }) => {
          const bgStyle = {
            backgroundColor: getRandomHexColor(),
          };
          return (
            <li className={statistics.item} key={id} style={bgStyle}>
              <span className={statistics.label}>{label}</span>
              <span className={statistics.percentage}>{percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  statistics: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      title: PropTypes.string,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};

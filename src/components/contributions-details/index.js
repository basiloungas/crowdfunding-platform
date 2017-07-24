import React from 'react';
import {Line} from 'rc-progress';

import {
  extractPercetageFromProject,
  moneyFormatterGenerator,
  getDaysDistance,
} from '../../utils/helpers';

export default (props) => {
  const {
    project,
  } = props;

  const {
    target,
    current,
    currency,
    endDate,
    contributions,
  } = project;

  const moneyFormatter = moneyFormatterGenerator(currency);

  return (
    <div>
      <Line
        percent={extractPercetageFromProject(project)}
        strokeWidth="2"
        strokeColor="#2BDE73"
      />

      <p>Raised <b>{moneyFormatter(current)}</b></p>
      <p>of total {moneyFormatter(target)}</p>

      <p><b>{contributions.length}</b></p>
      <p>backers</p>

      <p><b>{getDaysDistance(endDate)}</b></p>
      <p>days to go</p>
    </div>
  );
}

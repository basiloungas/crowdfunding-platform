import numeral from 'numeral';
import moment from 'moment';

export const extractPercetageFromProject = (project) => {
  const current = parseInt(project.current, 10);
  const target = parseInt(project.target, 10);
  const percentage = ((current * 100) / target);

  return Math.min(percentage, 100).toFixed(0);
}

export const moneyFormatterGenerator =  currency => amount => {
  return `${currency} ${moneyFormatter(amount)}`;
}

export const moneyFormatter = amount => {
  return numeral(amount).format(`0,0[.]00`);
}

// From: https://stackoverflow.com/a/9130040
export const getDaysDistance = (date) => {
  return Math.abs(moment().diff(date, 'days')) + 1;
}

export const dateFromNow = date => moment(date).fromNow();

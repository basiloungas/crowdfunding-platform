import React from 'react';
import {Column} from 'hedron';

import {
  moneyFormatterGenerator,
  dateFromNow,
} from '../../../../utils/helpers';
import UserDetails from '../../../../components/user-details';
import {
  Contribution,
  MoneyContainer,
  DateContainer,
} from './styled';

export default (props) => {
  const {contributions} = props;

  return (
    <div>
      {contributions.map(contribution => {
        const moneyFormatter = moneyFormatterGenerator(contribution.currency);

        return (
          <Contribution key={contribution.id}>
            <Column>
              <p>
                <UserDetails user={contribution.user} />
                <DateContainer>
                  {dateFromNow(contribution.createdAt)}
                </DateContainer>
              </p>

              <MoneyContainer>{moneyFormatter(contribution.amount)}</MoneyContainer>
            </Column>
          </Contribution>
        )
      })}
    </div>
  );
}


import { categories } from '@shared/utils/categories';
import React from 'react';


import {
  Container,
  Title,
  Amount,
  Footer,
  Category,
  Icon,
  CategoryName,
  Date,
} from './styles';

export interface TransactionCardProps {
  type: 'income' | 'outcome';
  name: string;
  amount: string;
  category: string;
  createdAt: string;
}

interface Props {
  data: TransactionCardProps;
}

export function TransactionCard({ data } : Props){
  const [ category ] = categories.filter(
    item => item.key === data.category
  );

  return (
    <Container>
      <Title>
        {data.name}
      </Title>

      <Amount type={data.type}>
        { data.type === 'outcome' && '- ' }
        { data.amount }
      </Amount>

      <Footer>
        <Category>
          <Icon name= {category.icon} />
          <CategoryName>
            {category.name}
          </CategoryName>
        </Category>

        <Date>
          {data.createdAt}
        </Date>
      </Footer>
    </Container>
  )
}
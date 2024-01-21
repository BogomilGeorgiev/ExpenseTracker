import './App.css';
import { Header } from './components/Header/Header';
import { Balance } from './components/Balance/Balance'
import { TransactionsList } from './components/Transactions/TransactionsList';
import { AddTransactionForm } from './components/AddTransactionFrom/AddTransactionForm';
import { Income } from './components/Income/Income';
import { Expense } from './components/Expense/Expense';
import { GlobalProvider } from './components/context/GlobalState';
import IncomeExpenseBox from './components/Containters/IncomeExpenseBox';
import AppContainer from './components/Containters/AppContainer';
import Main from './components/Containters/Main';

function App() {

  return (
    <GlobalProvider>

      <Header />

      <AppContainer>
        <IncomeExpenseBox>
          <Income />
        </IncomeExpenseBox>

        <Main>
          <Balance />
          <TransactionsList />
          <AddTransactionForm />
        </Main>

        <IncomeExpenseBox>
          <Expense />
        </IncomeExpenseBox>
      </AppContainer>

    </GlobalProvider >
  );
}


export default App;

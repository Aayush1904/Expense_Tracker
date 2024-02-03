export default (state, action) => {
    switch (action.type) {
      case 'DELETE_TRANSACTION':
        return {
          ...state,
          transactions: state.transactions.filter(transaction => transaction.id !== action.payload)
        };
      case 'ADD_TRANSACTION':
        return {
          ...state,
          transactions: [action.payload, ...state.transactions] // Fix the typo here
        };
      default:
        return state;
    }
  };
  
//In JavaScript, the switch statement is a control flow statement that allows you to conditionally execute different blocks of code based on the value of an expression. It is a cleaner alternative to a series of if-else statements when you need to check a single variable against multiple possible values.
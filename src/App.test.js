import { screen, fireEvent, waitFor } from '@testing-library/react';
import App from './App';
import AppContent from './components/AppContent';
import Listing from './components/appcontent/Listing';
import SeachBar from './components/appcontent/SeachBar';
import { beforeAllTest, render } from './testutils';

test('Should render app with header text PerxTech', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText('PerxTech');
  expect(linkElement).toBeInTheDocument();
});

describe('Should render search bar', () => {
  beforeAllTest();

  test('redner search bar', () => {
    const { getByText } = render(<SeachBar />);
    const searhBtn = getByText('Search');
    expect(searhBtn).toBeInTheDocument();
  });

  test('Should render input and disabled button', () => {
    const { getByTestId } = render(<SeachBar />);
    const input = getByTestId('userName');
    expect(input).toBeInTheDocument();
    const searchBtn = getByTestId('Search');
    expect(searchBtn).toBeInTheDocument();
    expect(searchBtn).toBeDisabled();
  });
});

describe('Should render listing component', () => {
  beforeAllTest();

  test('redner listing with Repositories & Organization title', () => {
    const { getByText } = render(<Listing />);
    const repoElememt = getByText('Repositories');
    expect(repoElememt).toBeInTheDocument();
    const orgElement = getByText('Organization');
    expect(orgElement).toBeInTheDocument();
  });
});

describe('Should render repositories and organization for user', () => {
  beforeAllTest();

  test('check search with value', async () => {
    const { getByTestId, findByText } = render(<AppContent />);
    //check input is in document
    const input = getByTestId('userName');
    expect(input).toBeInTheDocument();

    //check button is in document
    const searchBtn = getByTestId('Search');
    expect(searchBtn).toBeInTheDocument();

    //type defunkt in input and button is not disabled
    fireEvent.change(input, { target: { value: 'defunkt' } });
    expect(input.value).toBe('defunkt');
    expect(searchBtn).not.toBeDisabled();
    await fireEvent.click(searchBtn);

    // check loader is removed from dom
    const loader = await getByTestId('loading');
    await waitFor(() => expect(loader).not.toBeInTheDocument());

    //find repository name ace in list
    const text = await findByText('ace');
    await waitFor(() => expect(text).toBeInTheDocument());

    //find organization name mustache in list
    const orgText = await findByText('mustache');
    await waitFor(() => expect(orgText).toBeInTheDocument());

  });
});
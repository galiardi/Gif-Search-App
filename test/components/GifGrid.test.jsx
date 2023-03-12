import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks";

jest.mock("../../src/hooks");

describe('Testing components/GifGrid', () => { 
  
  const category= 'friends';

  test('debe mostrar el loading y category inicialmente', () => {
    
    useFetchGifs.mockReturnValue({
      isLoading: true,
      gifs: [],
    });

    render(<GifGrid category={category}/>);
    expect(screen.getByText('loading...'));
    expect(screen.getByText(category));

  });

  test('debe mostrar items cuando se cargan los gifs con el useFetchGifs', () => {

    const gifs = [
      {
        id: '1',
        title: 'my friends',
        url: 'https://blablabla.io/myfriends.jpg'
      },
      {
        id: '2',
        title: 'guadalupe',
        url: 'https://useState.com/guadalupe.jpg'
      }
    ];

    useFetchGifs.mockReturnValue({
      isLoading: true,
      gifs
    });

    render(<GifGrid category={category} />);
    expect(screen.getAllByRole('img').length).toBe(2);
    
  });
  
 })
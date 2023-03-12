import { render, screen } from '@testing-library/react';
import { GifItem } from '../../src/components';

describe('Testing GifItem', () => {

  const title = 'dirt collapse GIF';
  const url = 'https://media0.giphy.com/media/HlPP3bY8FRsWs/giphy.gif?cid=c04ecd26nljvmzpk5gxgmbxtkpapxjnhzy7192z7vzwiiasv&rid=giphy.gif&ct=g';


  test('debe hacer match con el snapshot', () => {

    const { container } = render(<GifItem title={title} url={url} />);
    expect(container).toMatchSnapshot();

  });


  test('debe mostrar la imagen con el url y el alt indicado', () => {

    render(<GifItem title={title} url={url}/>);
    // expect(screen.getByRole('img').src).toBe(url);
    // expect(screen.getByRole('img').alt).toBe(title)
    const {src, alt} = screen.getByRole('img');
    expect(src).toBe(url);
    expect(alt).toBe(title);

  })

  test('debe mostrar el titulo', () => {

    render(<GifItem title={title} url={url} />)
    expect(screen.getByText(title)).toBeTruthy();
    
  });
});

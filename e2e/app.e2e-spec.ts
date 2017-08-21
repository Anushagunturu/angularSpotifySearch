import { AngularSpotifySearchPage } from './app.po';

describe('angular-spotify-search App', function() {
  let page: AngularSpotifySearchPage;

  beforeEach(() => {
    page = new AngularSpotifySearchPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

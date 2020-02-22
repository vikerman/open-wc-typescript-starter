import { html, fixture, expect } from '@open-wc/testing';

import '../my-app';
import { MyApp } from '../src/MyApp';

describe('MyApp', () => {
  it('has page "main" by default', async () => {
    const el: MyApp = await fixture(html`
      <my-app></my-app>
    `);

    expect(el.page).to.equal('main');
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    expect(el.shadowRoot!.querySelector('main')).lightDom.to.equal(`
      <page-main></page-main>
    `);
  });

  it('renders default fallback content', async () => {
    const el: MyApp = await fixture(html`
      <my-app></my-app>
    `);
    el.page = undefined;

    expect(el.page).to.equal(undefined);
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    expect(el.shadowRoot!.querySelector('main')).lightDom.to.equal(`
      <page-main></page-main>
    `);
  });

  it('renders page-one if page property is set to pageOne', async () => {
    const el = await fixture(html`
      <my-app page="pageOne"></my-app>
    `);
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    expect(el.shadowRoot!.querySelector('main')).lightDom.to.equal(`
      <page-one></page-one>
    `);
  });

  it('changes the page if a menu link gets clicked', async () => {
    const el: MyApp = await fixture(html`
      <my-app></my-app>
    `);
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    (el.shadowRoot!.querySelectorAll('header a')[2] as HTMLElement).click();

    expect(el.page).to.equal('about');
  });

  it('matches the snapshot', async () => {
    const el = await fixture(html`
      <my-app></my-app>
    `);

    expect(el).shadowDom.to.equalSnapshot();
  });

  it('passes the a11y audit', async () => {
    const el = await fixture(html`
      <my-app></my-app>
    `);

    await expect(el).shadowDom.to.be.accessible();
  });
});

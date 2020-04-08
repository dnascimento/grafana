import { PanelModel, DashboardModel } from '../state';
import { getPanelMenu } from './getPanelMenu';

describe('getPanelMenu', () => {
  it('should return the correct panel menu items', () => {
    const panel = new PanelModel({});
    const dashboard = new DashboardModel({});

    const menuItems = getPanelMenu(dashboard, panel);
    expect(menuItems).toMatchInlineSnapshot(`
      Array [
        Object {
          "iconClassName": "eye",
          "onClick": [Function],
          "shortcut": "v",
          "text": "View",
        },
        Object {
          "iconClassName": "edit",
          "onClick": [Function],
          "shortcut": "e",
          "text": "Edit",
        },
        Object {
          "iconClassName": "share-alt",
          "onClick": [Function],
          "shortcut": "p s",
          "text": "Share",
        },
        Object {
          "iconClassName": "info-circle",
          "onClick": [Function],
          "subMenu": Array [
            Object {
              "onClick": [Function],
              "shortcut": "i d",
              "text": "Data",
            },
            Object {
              "onClick": [Function],
              "shortcut": "i q",
              "text": "Query",
            },
            Object {
              "onClick": [Function],
              "shortcut": "i p",
              "text": "Panel JSON",
            },
          ],
          "text": "Inspect",
          "type": "submenu",
        },
        Object {
          "iconClassName": "cube",
          "onClick": [Function],
          "subMenu": Array [
            Object {
              "onClick": [Function],
              "shortcut": "p d",
              "text": "Duplicate",
            },
            Object {
              "onClick": [Function],
              "text": "Copy",
            },
          ],
          "text": "More...",
          "type": "submenu",
        },
        Object {
          "type": "divider",
        },
        Object {
          "iconClassName": "trash-alt",
          "onClick": [Function],
          "shortcut": "p r",
          "text": "Remove",
        },
      ]
    `);
  });
});

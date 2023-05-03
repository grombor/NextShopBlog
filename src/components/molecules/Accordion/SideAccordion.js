import DropdownItem from './DropdownItem';

const sideMenuCategories = [
  {
    category: 'meble socjalne',
    subCategories: [
      {
        name: 'subcategory1',
        families: [
          {
            name: 'family1',
            link: '#',
          },
          {
            name: 'family2',
            link: '#',
          },
        ],
      },
      {
        name: 'subcategory2',
        families: [
          {
            name: 'family3',
            link: '#',
          },
          {
            name: 'family4',
            link: '#',
          },
        ],
      },
    ],
  },
  {
    category: 'meble biurowe',
    subCategories: [
      {
        name: 'subcategory1',
        families: [
          {
            name: 'subsub1',
            link: '#',
          },
          {
            name: 'subsub2',
            link: '#',
          },
        ],
      },      {
        name: 'subcategory1',
        families: [
          {
            name: 'subsub1',
            link: '#',
          },
          {
            name: 'subsub2',
            link: '#',
          },
        ],
      },
    ],
  },
  {
    category: 'meble medyczne',
    subCategories: [
      {
        name: 'subcategory1',
        families: [
          {
            name: 'subsub1',
            link: '#',
          },
          {
            name: 'subsub2',
            link: '#',
          },
        ],
      },
      {
        name: 'subcategory1',
        families: [
          {
            name: 'subsub1',
            link: '#',
          },
          {
            name: 'subsub2',
            link: '#',
          },
        ],
      },
    ],
  },
  {
    category: 'meble warsztatowe',
    subCategories: [
      {
        name: 'subcategory1',
        families: [
          {
            name: 'subsub1',
            link: '#',
          },
          {
            name: 'subsub2',
            link: '#',
          },
        ],
      },
      {
        name: 'subcategory1',
        families: [
          {
            name: 'subsub1',
            link: '#',
          },
          {
            name: 'subsub2',
            link: '#',
          },
        ],
      },
    ],
  },
  {
    category: 'meble szkolne',
    subCategories: [
      {
        name: 'subcategory1',
        families: [
          {
            name: 'subsub1',
            link: '#',
          },
          {
            name: 'subsub2',
            link: '#',
          },
        ],
      },
      {
        name: 'subcategory1',
        families: [
          {
            name: 'subsub1',
            link: '#',
          },
          {
            name: 'subsub2',
            link: '#',
          },
        ],
      },
    ],
  },
  {
    category: 'akcesoria do mebli',
    subCategories: [
      {
        name: 'subcategory1',
        families: [
          {
            name: 'subsub1',
            link: '#',
          },
          {
            name: 'subsub2',
            link: '#',
          },
        ],
      },
      {
        name: 'subcategory1',
        families: [
          {
            name: 'subsub1',
            link: '#',
          },
          {
            name: 'subsub2',
            link: '#',
          },
        ],
      },
    ],
  },
  {
    category: 'części zamienne i zamki',
    subCategories: [
      {
        name: 'subcategory1',
        families: [
          {
            name: 'subsub1',
            link: '#',
          },
          {
            name: 'subsub2',
            link: '#',
          },
        ],
      },
      {
        name: 'subcategory1',
        families: [
          {
            name: 'subsub1',
            link: '#',
          },
          {
            name: 'subsub2',
            link: '#',
          },
        ],
      },
    ],
  },
];

export default function Accordion() {
  return (
    <aside className="menu is-hidden-touch">
      {sideMenuCategories?.map((item, index) => (
        <DropdownItem
          Categoryname={item.category}
          subCategories={item.subCategories}
          key={`category${index}`}
        />
      ))}
    </aside>
  );
}

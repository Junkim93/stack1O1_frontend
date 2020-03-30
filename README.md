# Stack1O1
> 200개 스타트업은 어떤 기술 스택을 사용할까?

## Project Status
---
현재 개발 진행중


## Installation and Setup Guide
---

Installation:
`npm install`

To Run Test Suite:
- Unit & Integration Test
  - `npm run test:unit`
- E2E Test
  - `npm run test:e2e`
- UI Components
  - `npm run storybook`


## Folder Structure
---

    .
    ├── .storybook              # Storybook setup
    ├── public                  # Root index.html
    ├── src                     # Source files
    │   ├── api
    │   ├── assets              # font, image, styles
    │   ├── components
    │   │   ├── ...
    │   │   │   ├── stories     # component Storybook code
    │   ├── router        
    │   ├── store
    │   ├── views
    ├── tests                   # Automated tests (Unit, E2E)
    │   ├── e2e
    │   ├── unit               
    └── README.md
    
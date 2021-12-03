# Ailos - Test

> Angular 11+, JsonServer, Bootstrap

## Índice
* [Intuíto](#intuito)
* [Execução](#execucao)
* [Estrutura](#estrutura)

### Intuíto:
Desenvolver um projeto frontend de acordo com o arquivo `./Desafio_Frontend.pdf` para empresa **Ailos**.

### Execução
Para executar o projeto, primeiramente, é preciso instalar as dependências do **package.json** e configurar as libraries com o seguinte comando:
```Bash
$ npm run initial-build
```

Em seguida, precisamos executar a API com o **JsonServer** com o seguinte comando:
```Bash
$ npm run start:database
```

Depois que a API estiver em execução, precisamos executar o start do frontend com o seguinte comando:
```Bash
$ npm run start:app
```

Por fim, basta [`acessar a URL`](http://localhost:4200/)

### Estrutura
Você encontrará os seguintes diretórios e arquivos:

```
.
├── angular.json
├── database
│   ├── db.json
│   └── singular.js
├── Desafio_Frontend.pdf
├── e2e
│   ├── protractor.conf.js
│   ├── src
│   │   ├── app.e2e-spec.ts
│   │   └── app.po.ts
│   └── tsconfig.json
├── jest.config.js
├── package.json
├── projects
│   ├── ngx-receba
│   │   ├── jest.config.js
│   │   ├── src
│   │   │   ├── app
│   │   │   │   ├── app.component.html
│   │   │   │   ├── app.component.scss
│   │   │   │   ├── app.component.spec.ts
│   │   │   │   ├── app.component.ts
│   │   │   │   ├── app.module.ts
│   │   │   │   ├── app-routing.module.ts
│   │   │   │   ├── dashboard
│   │   │   │   │   ├── dashboard.component.html
│   │   │   │   │   ├── dashboard.component.scss
│   │   │   │   │   ├── dashboard.component.spec.ts
│   │   │   │   │   ├── dashboard.component.ts
│   │   │   │   │   ├── dashboard.module.ts
│   │   │   │   │   └── dashboard-routing.module.ts
│   │   │   │   ├── injector.component.ts
│   │   │   │   └── query
│   │   │   │       ├── query.component.html
│   │   │   │       ├── query.component.scss
│   │   │   │       ├── query.component.spec.ts
│   │   │   │       ├── query.component.ts
│   │   │   │       ├── query.module.ts
│   │   │   │       ├── query-routing.module.ts
│   │   │   │       └── query.store.ts
│   │   │   ├── assets
│   │   │   │   ├── css
│   │   │   │   │   ├── animate.css
│   │   │   │   │   ├── nucleo-icons.css
│   │   │   │   │   └── nucleo-svg.css
│   │   │   │   ├── fonts
│   │   │   │   │   ├── nucleo.eot
│   │   │   │   │   ├── nucleo-icons.eot
│   │   │   │   │   ├── nucleo-icons.svg
│   │   │   │   │   ├── nucleo-icons.ttf
│   │   │   │   │   ├── nucleo-icons.woff
│   │   │   │   │   ├── nucleo-icons.woff2
│   │   │   │   │   ├── nucleo.ttf
│   │   │   │   │   ├── nucleo.woff
│   │   │   │   │   └── nucleo.woff2
│   │   │   │   ├── img
│   │   │   │   │   ├── 404
│   │   │   │   │   │   ├── 404_cloud.png
│   │   │   │   │   │   └── 404.png
│   │   │   │   │   ├── curved-images
│   │   │   │   │   │   ├── curved14.jpg
│   │   │   │   │   │   └── white-curved.jpeg
│   │   │   │   │   ├── favicon.png
│   │   │   │   │   ├── logo.png
│   │   │   │   │   └── profile.png
│   │   │   │   ├── js
│   │   │   │   │   ├── ailos.js
│   │   │   │   │   └── core
│   │   │   │   │       └── fontawesome.min.js
│   │   │   │   └── scss
│   │   │   │       ├── ailos
│   │   │   │       │   ├── _alert.scss
│   │   │   │       │   ├── avatars
│   │   │   │       │   │   ├── _avatar-group.scss
│   │   │   │       │   │   └── _avatar.scss
│   │   │   │       │   ├── _badge.scss
│   │   │   │       │   ├── bootstrap
│   │   │   │       │   │   ├── _accordion.scss
│   │   │   │       │   │   ├── _alert.scss
│   │   │   │       │   │   ├── _badge.scss
│   │   │   │       │   │   ├── bootstrap-grid.scss
│   │   │   │       │   │   ├── bootstrap-reboot.scss
│   │   │   │       │   │   ├── bootstrap.scss
│   │   │   │       │   │   ├── bootstrap-utilities.scss
│   │   │   │       │   │   ├── _breadcrumb.scss
│   │   │   │       │   │   ├── _button-group.scss
│   │   │   │       │   │   ├── _buttons.scss
│   │   │   │       │   │   ├── _card.scss
│   │   │   │       │   │   ├── _carousel.scss
│   │   │   │       │   │   ├── _close.scss
│   │   │   │       │   │   ├── _containers.scss
│   │   │   │       │   │   ├── _dropdown.scss
│   │   │   │       │   │   ├── forms
│   │   │   │       │   │   │   ├── _floating-labels.scss
│   │   │   │       │   │   │   ├── _form-check.scss
│   │   │   │       │   │   │   ├── _form-control.scss
│   │   │   │       │   │   │   ├── _form-range.scss
│   │   │   │       │   │   │   ├── _form-select.scss
│   │   │   │       │   │   │   ├── _form-text.scss
│   │   │   │       │   │   │   ├── _input-group.scss
│   │   │   │       │   │   │   ├── _labels.scss
│   │   │   │       │   │   │   └── _validation.scss
│   │   │   │       │   │   ├── _forms.scss
│   │   │   │       │   │   ├── _functions.scss
│   │   │   │       │   │   ├── _grid.scss
│   │   │   │       │   │   ├── helpers
│   │   │   │       │   │   │   ├── _clearfix.scss
│   │   │   │       │   │   │   ├── _colored-links.scss
│   │   │   │       │   │   │   ├── _position.scss
│   │   │   │       │   │   │   ├── _ratio.scss
│   │   │   │       │   │   │   ├── _stretched-link.scss
│   │   │   │       │   │   │   ├── _text-truncation.scss
│   │   │   │       │   │   │   └── _visually-hidden.scss
│   │   │   │       │   │   ├── _helpers.scss
│   │   │   │       │   │   ├── _images.scss
│   │   │   │       │   │   ├── _list-group.scss
│   │   │   │       │   │   ├── mixins
│   │   │   │       │   │   │   ├── _alert.scss
│   │   │   │       │   │   │   ├── _border-radius.scss
│   │   │   │       │   │   │   ├── _box-shadow.scss
│   │   │   │       │   │   │   ├── _breakpoints.scss
│   │   │   │       │   │   │   ├── _buttons.scss
│   │   │   │       │   │   │   ├── _caret.scss
│   │   │   │       │   │   │   ├── _clearfix.scss
│   │   │   │       │   │   │   ├── _color-scheme.scss
│   │   │   │       │   │   │   ├── _container.scss
│   │   │   │       │   │   │   ├── _deprecate.scss
│   │   │   │       │   │   │   ├── _forms.scss
│   │   │   │       │   │   │   ├── _gradients.scss
│   │   │   │       │   │   │   ├── _grid.scss
│   │   │   │       │   │   │   ├── _image.scss
│   │   │   │       │   │   │   ├── _list-group.scss
│   │   │   │       │   │   │   ├── _lists.scss
│   │   │   │       │   │   │   ├── _pagination.scss
│   │   │   │       │   │   │   ├── _reset-text.scss
│   │   │   │       │   │   │   ├── _resize.scss
│   │   │   │       │   │   │   ├── _table-variants.scss
│   │   │   │       │   │   │   ├── _text-truncate.scss
│   │   │   │       │   │   │   ├── _transition.scss
│   │   │   │       │   │   │   ├── _utilities.scss
│   │   │   │       │   │   │   └── _visually-hidden.scss
│   │   │   │       │   │   ├── _mixins.scss
│   │   │   │       │   │   ├── _modal.scss
│   │   │   │       │   │   ├── _navbar.scss
│   │   │   │       │   │   ├── _nav.scss
│   │   │   │       │   │   ├── _offcanvas.scss
│   │   │   │       │   │   ├── _pagination.scss
│   │   │   │       │   │   ├── _popover.scss
│   │   │   │       │   │   ├── _progress.scss
│   │   │   │       │   │   ├── _reboot.scss
│   │   │   │       │   │   ├── _root.scss
│   │   │   │       │   │   ├── _spinners.scss
│   │   │   │       │   │   ├── _tables.scss
│   │   │   │       │   │   ├── _toasts.scss
│   │   │   │       │   │   ├── _tooltip.scss
│   │   │   │       │   │   ├── _transitions.scss
│   │   │   │       │   │   ├── _type.scss
│   │   │   │       │   │   ├── utilities
│   │   │   │       │   │   │   └── _api.scss
│   │   │   │       │   │   ├── _utilities.scss
│   │   │   │       │   │   ├── _variables.scss
│   │   │   │       │   │   └── vendor
│   │   │   │       │   │       └── _rfs.scss
│   │   │   │       │   ├── breadcrumbs
│   │   │   │       │   │   └── _breadcrumb.scss
│   │   │   │       │   ├── _buttons.scss
│   │   │   │       │   ├── cards
│   │   │   │       │   │   └── card-background.scss
│   │   │   │       │   ├── _cards.scss
│   │   │   │       │   ├── custom
│   │   │   │       │   │   ├── _styles.scss
│   │   │   │       │   │   └── _variables.scss
│   │   │   │       │   ├── _dropdown.scss
│   │   │   │       │   ├── _dropup.scss
│   │   │   │       │   ├── _fixed-plugin.scss
│   │   │   │       │   ├── _footer.scss
│   │   │   │       │   ├── forms
│   │   │   │       │   │   ├── _form-check.scss
│   │   │   │       │   │   ├── _form-select.scss
│   │   │   │       │   │   ├── _forms.scss
│   │   │   │       │   │   ├── _form-switch.scss
│   │   │   │       │   │   ├── _input-group.scss
│   │   │   │       │   │   ├── _inputs.scss
│   │   │   │       │   │   └── _labels.scss
│   │   │   │       │   ├── _forms.scss
│   │   │   │       │   ├── _gradients.scss
│   │   │   │       │   ├── _header.scss
│   │   │   │       │   ├── _info-areas.scss
│   │   │   │       │   ├── _misc.scss
│   │   │   │       │   ├── mixins
│   │   │   │       │   │   ├── _hover.scss
│   │   │   │       │   │   ├── mixins.scss
│   │   │   │       │   │   └── _social-buttons.scss
│   │   │   │       │   ├── _navbar.scss
│   │   │   │       │   ├── _navbar-vertical.scss
│   │   │   │       │   ├── _nav.scss
│   │   │   │       │   ├── _pagination.scss
│   │   │   │       │   ├── _popovers.scss
│   │   │   │       │   ├── _progress.scss
│   │   │   │       │   ├── _rtl.scss
│   │   │   │       │   ├── _social-buttons.scss
│   │   │   │       │   ├── _tables.scss
│   │   │   │       │   ├── theme.scss
│   │   │   │       │   ├── _timeline.scss
│   │   │   │       │   ├── _tooltips.scss
│   │   │   │       │   ├── _typography.scss
│   │   │   │       │   ├── _utilities.scss
│   │   │   │       │   ├── variables
│   │   │   │       │   │   ├── _animations.scss
│   │   │   │       │   │   ├── _avatars.scss
│   │   │   │       │   │   ├── _breadcrumb.scss
│   │   │   │       │   │   ├── _cards.scss
│   │   │   │       │   │   ├── _dropdowns.scss
│   │   │   │       │   │   ├── _fixed-plugin.scss
│   │   │   │       │   │   ├── _form-switch.scss
│   │   │   │       │   │   ├── _header.scss
│   │   │   │       │   │   ├── _info-areas.scss
│   │   │   │       │   │   ├── _misc.scss
│   │   │   │       │   │   ├── _navbar.scss
│   │   │   │       │   │   ├── _navbar-vertical.scss
│   │   │   │       │   │   ├── _pagination.scss
│   │   │   │       │   │   ├── _rtl.scss
│   │   │   │       │   │   ├── _social-buttons.scss
│   │   │   │       │   │   ├── _table.scss
│   │   │   │       │   │   ├── _timeline.scss
│   │   │   │       │   │   └── _utilities.scss
│   │   │   │       │   └── _variables.scss
│   │   │   │       └── ailos.scss
│   │   │   ├── environments
│   │   │   │   ├── environment.prod.ts
│   │   │   │   └── environment.ts
│   │   │   ├── index.html
│   │   │   ├── main.ts
│   │   │   ├── polyfills.ts
│   │   │   └── styles.scss
│   │   ├── tsconfig.app.json
│   │   └── tsconfig.spec.json
│   └── receba-lib
│       ├── ngx-api
│       │   ├── jest.config.js
│       │   ├── ng-package.json
│       │   ├── package.json
│       │   ├── README.md
│       │   ├── src
│       │   │   ├── lib
│       │   │   │   ├── controllers
│       │   │   │   │   ├── index.ts
│       │   │   │   │   └── pessoa.api.ts
│       │   │   │   ├── domain
│       │   │   │   │   ├── api.abstract.ts
│       │   │   │   │   ├── entity.abstract.ts
│       │   │   │   │   ├── index.ts
│       │   │   │   │   └── paginable.interface.ts
│       │   │   │   ├── index.ts
│       │   │   │   └── models
│       │   │   │       ├── conta.ts
│       │   │   │       ├── endereco.ts
│       │   │   │       ├── filiacao.ts
│       │   │   │       ├── index.ts
│       │   │   │       ├── pessoa.ts
│       │   │   │       └── telefones.ts
│       │   │   └── public-api.ts
│       │   ├── tsconfig.lib.json
│       │   ├── tsconfig.lib.prod.json
│       │   ├── tsconfig.spec.json
│       │   └── tslint.json
│       └── ngx-component
│           ├── jest.config.js
│           ├── ng-package.json
│           ├── package.json
│           ├── README.md
│           ├── src
│           │   ├── lib
│           │   │   ├── index.ts
│           │   │   ├── ngx-404-page
│           │   │   │   ├── index.ts
│           │   │   │   ├── ngx-404-page.component.html
│           │   │   │   ├── ngx-404-page.component.scss
│           │   │   │   ├── ngx-404-page.component.spec.ts
│           │   │   │   ├── ngx-404-page.component.ts
│           │   │   │   └── ngx-404-page.module.ts
│           │   │   ├── ngx-aside
│           │   │   │   ├── index.ts
│           │   │   │   ├── ngx-aside.component.html
│           │   │   │   ├── ngx-aside.component.scss
│           │   │   │   ├── ngx-aside.component.spec.ts
│           │   │   │   ├── ngx-aside.component.ts
│           │   │   │   └── ngx-aside.module.ts
│           │   │   ├── ngx-breadcrumb
│           │   │   │   ├── index.ts
│           │   │   │   ├── ngx-breadcrumb.component.html
│           │   │   │   ├── ngx-breadcrumb.component.scss
│           │   │   │   ├── ngx-breadcrumb.component.spec.ts
│           │   │   │   ├── ngx-breadcrumb.component.ts
│           │   │   │   ├── ngx-breadcrumb.module.ts
│           │   │   │   └── ngx-breadcrumb.service.ts
│           │   │   ├── ngx-navbar
│           │   │   │   ├── index.ts
│           │   │   │   ├── ngx-navbar.component.html
│           │   │   │   ├── ngx-navbar.component.scss
│           │   │   │   ├── ngx-navbar.component.spec.ts
│           │   │   │   ├── ngx-navbar.component.ts
│           │   │   │   └── ngx-navbar.module.ts
│           │   │   └── ngx-people
│           │   │       ├── index.ts
│           │   │       ├── ngx-people.component.html
│           │   │       ├── ngx-people.component.scss
│           │   │       ├── ngx-people.component.spec.ts
│           │   │       ├── ngx-people.component.ts
│           │   │       └── ngx-people.module.ts
│           │   └── public-api.ts
│           ├── tsconfig.lib.json
│           ├── tsconfig.lib.prod.json
│           ├── tsconfig.spec.json
│           └── tslint.json
├── README.md
├── setup-jest.ts
├── test-config.helper.ts
├── tree.txt
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.spec.json
└── tslint.json
```

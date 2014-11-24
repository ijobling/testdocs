// Generated by CoffeeScript 2.0.0-beta4
void function () {
  var jqTabs;
  jqTabs = function () {
    jqTabs.VERSION = '1.0.1';
    jqTabs.prototype.events = {};
    function jqTabs(param$, options) {
      var callback, event, instance$, this$;
      instance$ = this;
      this.makeContent = function (a) {
        return jqTabs.prototype.makeContent.apply(instance$, arguments);
      };
      this.seek = function (a) {
        return jqTabs.prototype.seek.apply(instance$, arguments);
      };
      this.changeTab = function (a) {
        return jqTabs.prototype.changeTab.apply(instance$, arguments);
      };
      this.$tabsContainer = param$;
      this.activeTab = 0;
      this.settings = {
        activeClass: 'active',
        useHistory: true,
        hiddenClass: 'hidden',
        tabsClickable: true
      };
      $.extend(this.settings, options);
      if (null != options.events)
        for (event in options.events) {
          callback = options.events[event];
          this.on(event, callback);
        }
      if (this.settings.useHistory && !('undefined' !== typeof hasher && null != hasher))
        this.settings.useHistory = false;
      if (!this.settings.tabsClickable)
        this.settings.useHistory = false;
      this.updateElements();
      this.numTabs = this.$tabContent.length;
      $(this.$tabs[0]).addClass(this.settings.activeClass);
      this.$tabContent.addClass(this.settings.hiddenClass);
      $(this.$tabContent[0]).removeClass(this.settings.hiddenClass);
      $('ul.tab-headers', this.$tabsContainer).on('click', 'li', (this$ = this, function (e) {
        var target, toTab;
        e.preventDefault();
        if (this$.settings.tabsClickable) {
          target = $(e.currentTarget);
          if (!target.hasClass(this$.settings.activeClass)) {
            toTab = this$.$tabs.index(target);
            return this$.seek(toTab);
          }
        }
      }));
      if (this.settings.useHistory)
        this.setHashChange();
    }
    jqTabs.prototype.changeTab = function (whereTo) {
      var $currentTab;
      $currentTab = $(this.$tabs[whereTo]);
      this.activeTab = whereTo;
      this.$tabs.removeClass(this.settings.activeClass);
      $currentTab.addClass(this.settings.activeClass);
      this.$tabContent.addClass(this.settings.hiddenClass);
      return $(this.$tabContent[whereTo]).removeClass(this.settings.hiddenClass);
    };
    jqTabs.prototype.seek = function (whereTo) {
      var $currentTab, goOn, hash;
      if (0 > whereTo || whereTo >= this.numTabs)
        return;
      goOn = this.trigger('beforeChange:' + whereTo, whereTo) || this.trigger('beforeChange', whereTo);
      if (goOn !== false) {
        if (this.settings.useHistory) {
          $currentTab = $(this.$tabs[whereTo]);
          hash = $currentTab.find('a').attr('href').replace(/\#/, '');
          hasher.changed.active = false;
          hasher.setHash(hash);
          hasher.changed.active = true;
        }
        this.changeTab(whereTo);
        this.trigger('change:' + whereTo);
        this.trigger('change', whereTo);
      }
    };
    jqTabs.prototype.next = function () {
      this.seek(this.activeTab + 1);
    };
    jqTabs.prototype.previous = function () {
      this.seek(this.activeTab - 1);
    };
    jqTabs.prototype.on = function (event, callback) {
      this.events[event] = this.events[event] || [];
      return this.events[event].push(callback);
    };
    jqTabs.prototype.off = function (event, callback) {
      if (!this.events[event])
        return;
      if (callback) {
        return this.events[event].splice(this.events[event].indexOf(callback), 1);
      } else {
        return delete this.events[event];
      }
    };
    jqTabs.prototype.trigger = function (event, args) {
      var returnValues;
      args = 2 <= arguments.length ? [].slice.call(arguments, 1) : [];
      if (!this.events[event])
        return;
      returnValues = function (accum$) {
        var eventCallback;
        for (var i$ = 0, length$ = this.events[event].length; i$ < length$; ++i$) {
          eventCallback = this.events[event][i$];
          accum$.push(eventCallback.apply(this, args));
        }
        return accum$;
      }.call(this, []);
      return !in$(false, returnValues);
    };
    jqTabs.prototype.insertAfter = function (index, tabHeader, tabContent, select) {
      var $newTabContent, $newTabHeader, $tabContent, $tabHeader;
      select = select !== void 0 ? select : true;
      $tabHeader = $(this.$tabs[index]);
      $newTabHeader = this.makeHeader(tabHeader);
      $tabHeader.after($newTabHeader);
      $tabContent = $(this.$tabContent[index]);
      $newTabContent = this.makeContent(tabContent);
      $tabContent.after($newTabContent);
      this.numTabs++;
      this.updateElements();
      if (select)
        this.seek(index + 1);
      return $newTabContent;
    };
    jqTabs.prototype.insertBefore = function (index, tabHeader, tabContent, select) {
      var $newTabContent, $newTabHeader, $tabContent, $tabHeader;
      select = select !== void 0 ? select : true;
      $tabHeader = $(this.$tabs[index]);
      $newTabHeader = this.makeHeader(tabHeader);
      $tabHeader.before($newTabHeader);
      $tabContent = $(this.$tabContent[index]);
      $newTabContent = this.makeContent(tabContent);
      $tabContent.before($newTabContent);
      this.numTabs++;
      this.updateElements();
      if (select)
        this.seek(index + 1);
      return $newTabContent;
    };
    jqTabs.prototype.addTab = function (tabHeader, tabContent, select) {
      var $newTabContent, $newTabHeader, headerContainer;
      if (this.numTabs === 0) {
        headerContainer = this.$tabsContainer.find('.tab-headers');
        $newTabHeader = this.makeHeader(tabHeader);
        $newTabHeader.addClass(this.settings.activeClass);
        headerContainer.append($newTabHeader);
        $newTabContent = this.makeContent(tabContent);
        $newTabContent.removeClass(this.settings.hiddenClass);
        this.$tabsContainer.append($newTabContent);
        this.updateElements();
        this.numTabs++;
        return $newTabContent;
      } else {
        return this.insertAfter(this.numTabs - 1, tabHeader, tabContent, select);
      }
    };
    jqTabs.prototype.removeTab = function (index) {
      $(this.$tabs[index]).remove();
      $(this.$tabContent[index]).remove();
      this.numTabs--;
      return this.updateElements();
    };
    jqTabs.prototype.removeLast = function () {
    };
    jqTabs.prototype.updateElements = function () {
      this.$tabs = $('ul.tab-headers li:not(.ignore-tab)', this.$tabsContainer);
      return this.$tabContent = this.$tabsContainer.children('div');
    };
    jqTabs.prototype.makeHeader = function (header) {
      return $('<li/>').append(header);
    };
    jqTabs.prototype.makeContent = function (content) {
      return $('<div/>', { 'class': 'tabcontent ' + this.settings.hiddenClass }).append(content);
    };
    jqTabs.prototype.setHashChange = function () {
      var historyChangeTab, this$;
      historyChangeTab = (this$ = this, function (newHash) {
        var changeTo;
        changeTo = -1;
        this$.$tabs.each(function (index, elem) {
          var href;
          href = $(elem).children('a').attr('href');
          href = href.replace(/\#/, '');
          if (href === newHash) {
            changeTo = index;
            return false;
          }
        });
        if (changeTo !== -1)
          return this$.seek(changeTo);
      });
      hasher.initialized.add(historyChangeTab);
      hasher.changed.add(historyChangeTab);
      hasher.init();
    };
    return jqTabs;
  }();
  window.jqTabs = jqTabs;
  function in$(member, list) {
    for (var i = 0, length = list.length; i < length; ++i)
      if (i in list && list[i] === member)
        return true;
    return false;
  }
}.call(this);
//@ sourceMappingURL=jqTabs.js.map

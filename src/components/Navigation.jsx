'use strict';

import React, {Component} from 'react';
import $ from 'jquery';

class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isScrolled: false,
            isOpen: false
        };
        this.headerItem = {
            id: 'header'
        };

        this.onResizeOrScroll = this.onResizeOrScroll.bind(this);
        this.onItemClick = this.onItemClick.bind(this);
        this.onToggleClick = this.onToggleClick.bind(this);
    }

    componentDidMount() {
        window.addEventListener('scroll', this.onResizeOrScroll);
        window.addEventListener('resize', this.onResizeOrScroll);
        this.onResizeOrScroll();
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.onResizeOrScroll);
        window.removeEventListener('resize', this.onResizeOrScroll);
    }

    getScrollTop() {
        return window.pageYOffset || document.documentElement.scrollTop;
    }

    getWindowWidth() {
        return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    }

    onItemClick(item, event) {
        event.preventDefault();
        this.setState({
            isOpen: false
        });
        this.scrollTo(document.getElementById(item.id).offsetTop - this.nav.offsetHeight);
    }

    onToggleClick(event) {
        event.preventDefault();
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    scrollTo(offsetTop = 0) {
        this.$body.animate({
            scrollTop: offsetTop
        }, '500', 'swing');
    }

    onResizeOrScroll() {
        let isScrolled = this.getScrollTop() >= this.header.offsetHeight - this.nav.offsetHeight;
        this.setState({isScrolled});
    }

    render() {
        let navWrapperClass = 'nav-wrapper';
        if (this.state.isScrolled) {
            navWrapperClass += ' scrolled';
        }
        if (this.state.isOpen) {
            navWrapperClass += ' open';
        }

        return (
            <nav id="nav" className="scrolled">
                <div className={navWrapperClass}>
                    <div className='container'>
                        <a className="name" href="#header" onClick={this.onItemClick.bind(null, this.headerItem)}>Brian
                            Elting</a>
                        <ul>
                            {this.props.items.map(item => {
                                return (
                                    <li key={item.id}>
                                        <a href={'#' + item.id}
                                           onClick={this.onItemClick.bind(null, item)}>{item.title}</a>
                                    </li>
                                );
                            })}
                        </ul>
                        <a className='visible-xs-block nav-toggle' href="" onClick={this.onToggleClick}>
                            <i className="material-icons md-36">&#xE5D2;</i>
                        </a>
                    </div>
                </div>
            </nav>
        );
    }

    get $body() {
        if (!this._body) {
            this._body = $('html, body');
        }
        return this._body
    }

    get header() {
        if (!this._header) {
            this._header = document.getElementById('header');
        }
        return this._header;
    }

    get nav() {
        if (!this._nav) {
            this._nav = document.getElementById('nav');
        }
        return this._nav;
    }
}

export default Navigation;
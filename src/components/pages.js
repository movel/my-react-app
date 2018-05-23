import React from 'react'
import { Link, Route } from 'react-router-dom'
import { PageTemplate } from './PageTemplate'
import { AboutMenu } from './AboutMenu'
import { Services } from './Services'
import { Company } from './Company'
import { History } from './History'
import { Location } from './Location'

export const Home = () => 
    <section className="home">    
        <nav>
            <Link to="about">[ About ]</Link>
            <Link to="events">[ Events ]</Link>
            <Link to="products">[ Products ]</Link>
            <Link to="contact">[ Contact Us ]</Link>
        </nav>
        <h1>[ Company Website ]</h1> 
    </section>

export const About = ({ match }) => 
    <PageTemplate>
        <section className="about">
            <Route component={AboutMenu} />
            <Route exact path="/about" component={Company} />
            <Route path="/about/history" component={History} />
            <Route path="/about/services" component={Services} />
            <Route path="/about/location" component={Location} />
        </section>
    </PageTemplate>

export const Events = () => 
    <PageTemplate>
        <section className="events">
            <h1>[ Events Calendar ]</h1>
        </section>
    </PageTemplate>

export const Products = () => 
    <PageTemplate>
        <section className="products">
            <h1>[ Products Catalog ]</h1>
        </section>
    </PageTemplate>

export const Contact = () =>
    <PageTemplate>
        <section className="contact">
            <h1>[ Contact Us ]</h1>
        </section>
    </PageTemplate>

export const Whoops404 = ({ location }) => 
    <section className="whoops-404">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="error-template">
                        <h1>
                            Oops!</h1>
                        <h2>
                            404 Not Found</h2>
                        <div className="error-details">
                            <h1>Resource not found at '{location.pathname}'</h1>
                        </div>
                        <div className="error-actions">
                            <a href="/home" class="btn btn-primary btn-lg"><span class="glyphicon glyphicon-home"></span>
                                Back To Home </a><a href="/home" class="btn btn-default btn-lg">
                                    <span class="glyphicon glyphicon-envelope"></span> Contact Support 
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
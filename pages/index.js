import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';
import UpcomingEvents from '../components/UpcomingEvents';

const index = () => (
  <Layout>
    <Head>
      <title>ReFi Spring: Scaling climate impact on Web3</title>
    </Head>
    <main className="main-content place-content-center">
      <section className="max-w-prose mt-12">
        <h2>Fostering Regenerative Finance Communities around the world</h2>
        <p className="mt-3">ReFi Spring is a series of local in-person events taking place across the globe to support the emergence of  Refi communities exploring and developing a new movement arising at the intersection of web3, regenerative finance, and climate action. The Refi Spring team recognizes the immense challenge that humanity faces in the Climate & Ecological Emergency and believes in the potential of the ReFi movement to spark a broad phase shift in civilization over the coming decades.</p>
        <p className="mt-3">Refi Spring exists to support local organizers to initiate new place-based hubs of Refi activity through a complete suite of support services that makes it easy for you to enable your community to learn and develop your own understanding and application of Regenerative protocols.</p>
        <p className="mt-3">We are creating resources to make it easy for anybody to run a Local ReFi Spring event. Our team will support you through a variety of gifts.</p>
        <ul className="mt-6 pl-4 italic">
          <li>1. Event subsidies through community grants to bootstrap your event</li>
          <li>2. A decentralized online ticket sales, event management, and marketing platform to enable you to organize your event seamlessly</li>
          <li>3. Marketing support to ensure you find attendees.</li>
          <li>4. A suggested Event Framework and Content to support your attendees and your event (pre-event, Event, Post-Event Support)</li>
          <li>5. Event and community-building support</li>
        </ul>
        <p className="mt-6">We are currently in development mode working towards a full re-launch in July 2022. Sign up here to be the first to hear about this amazing opportunity.</p>
      </section>
      <section className="mt-12">
        <h3 className="text-center mb-4">Upcoming events</h3>
        <UpcomingEvents center />
      </section>
    </main>

  </Layout>
);

export default index;

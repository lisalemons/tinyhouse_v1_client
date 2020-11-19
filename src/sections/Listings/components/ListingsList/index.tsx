import React from 'react';
import { Avatar, Button, List } from 'antd';
import { Listings as ListingsData } from '../../__generated__/Listings';

interface Props {
  listings: ListingsData['listings'];
  handleCreateBooking: (listingId: string) => void;
  handleDeleteListing: (id: string) => void;
}

export const ListingsList = ({
  listings,
  handleCreateBooking,
  handleDeleteListing,
}: Props) => {
  return (
    <div className="listings-section">
      <h2>TinyHouse Listings</h2>
      <List
        itemLayout="horizontal"
        dataSource={listings}
        renderItem={(listing) => {
          return (
            <List.Item
              actions={[
                <Button
                  type="primary"
                  onClick={() => handleDeleteListing(listing.id)}
                >
                  Delete
                </Button>,
                <Button
                  type="primary"
                  onClick={() => handleCreateBooking(listing.id)}
                >
                  Book
                </Button>,
              ]}
            >
              <List.Item.Meta
                title={listing.title}
                description={listing.address}
                avatar={<Avatar src={listing.image} shape="square" size={48} />}
              />
            </List.Item>
          );
        }}
      />
    </div>
  );
};
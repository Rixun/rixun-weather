import { StyleSheet, Text } from 'react-native';
import React from 'react';
import { useLocationStore } from '../../store/store';
import IconLink from '../IconLink/IconLink';
import Loader from '../Loader/Loader';

export default function DefaultHomeScreen() {
  const defaultLocation = useLocationStore((state) => state.defaultLocation);
  return (
    <>
      {Object.keys(defaultLocation).length > 0 ? (
        <>
          <Loader />
        </>
      ) : (
        <IconLink
          href="/Search"
          text="Search Location"
          iconName="Search"
          iconSize={100}
        />
      )}
    </>
  );
}

const styles = StyleSheet.create({});

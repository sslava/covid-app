import Share from 'react-native-share';

export default async function shareImageDialog(tmpPath, title) {
  try {
    const url = `file://${tmpPath}`;
    await Share.open({
      url,
      type: 'image/jpeg',
      failOnCancel: false,
      activityItemSources: [
        {
          // placeholderItem: {type: 'text', content: title},
          // item: {
          //   default: {
          //     type: 'url',
          //     content: url,
          //   },
          // },
          linkMetadata: {
            title,
            icon: url,
          },
        },
      ],
    });
  } catch (err) {
    console.log(err);
  }
}
